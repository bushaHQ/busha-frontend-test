import React, { useEffect, useState } from "react";

import {
  Close,
  MenuIcon,
  MainArea,
  MobileMenu,
  BodyContainer,
  MenuContainer,
  AccountContainer,
  MobileMenuContainer,
} from "./MainPageTemplate.styles";

import {
  Header,
  MenuList,
  AccountCard,
  NetworkErrorCard,
} from "../../molecules";

import Modal from "../../shared/Modal";
import Loader from "../../shared/Loader";
import { METHOD } from "../../../typings";
import { colors } from "../../../constants";
import { useNetworkRequest } from "../../../hooks";
import { TopBar, AddWallet } from "../../organisms";
import { IAccount, IWallet } from "../../../typings";

export const MainPage: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileMenu, setopenMobileMenu] = useState(false);
  const {
    data: accountData,
    isLoading: accountLoading,
    error: accountError,
    fetchData: fetchAccounts,
  } = useNetworkRequest({
    path: "accounts",
    method: METHOD.GET,
  });

  useEffect(() => {
    fetchAccounts();
    return () => {
      setIsOpen(false);
    };
    // eslint-disable-next-line
  }, []);

  const AccountCardContent = () => {
    if (accountLoading)
      return (
        <AccountContainer noData={accountLoading || accountError}>
          <Loader size={50} width={5} />
        </AccountContainer>
      );
    if (accountError)
      return (
        <AccountContainer noData={accountLoading || accountError}>
          <NetworkErrorCard reFetch={fetchAccounts} />
        </AccountContainer>
      );
    return (
      <AccountContainer noData={accountLoading || accountError}>
        {accountData?.map(
          ({
            imgURL,
            name,
            balance,
            currency,
          }: Pick<
            IAccount | IWallet,
            "imgURL" | "name" | "balance" | "currency"
          >) => (
            <AccountCard
              key={name}
              accountIcon={imgURL}
              accountName={name}
              ammount={balance}
              currency={currency}
            />
          )
        )}
      </AccountContainer>
    );
  };
  return (
    <>
      <TopBar />
      <BodyContainer>
        <MenuIcon
          color={colors.GREEN_COLOR}
          onClick={() => setopenMobileMenu(true)}
        />
        <MenuContainer>
          <MenuList />
        </MenuContainer>
        {openMobileMenu && (
          <MobileMenuContainer>
            <MobileMenu>
              <Close onClick={() => setopenMobileMenu(false)} />
              <MenuList />
            </MobileMenu>
          </MobileMenuContainer>
        )}
        <MainArea>
          <Header
            setModal={setIsOpen}
            noData={accountLoading || accountError}
          />
          <AccountCardContent />
        </MainArea>
      </BodyContainer>
      <Modal isOpen={isOpen} data-testid="modal">
        <AddWallet setModal={setIsOpen} fetchAccounts={fetchAccounts} />
      </Modal>
    </>
  );
};
