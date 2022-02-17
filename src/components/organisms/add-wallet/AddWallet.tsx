import React, { useEffect, useState } from "react";

import {
  Close,
  Select,
  Button,
  Container,
  SelectItemText,
  NoDataContainer,
  AddWalletDescText,
  AddWalletBiggerText,
} from "./AddWallet.styles";

import Loader from "../../shared/Loader";
import { METHOD } from "../../../typings";
import { IWallet } from "../../../typings";
import { useNetworkRequest } from "../../../hooks";
import { AddWalletProps } from "./AddWallet.interface";
import { NetworkErrorCard, NetworkErrorSmallCard } from "../../molecules";

export const AddWallet: React.FC<AddWalletProps> = ({
  setModal,
  fetchAccounts,
}) => {
  const [value, setValue] = useState("");
  const [postError, setPostError] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    data: WalletData,
    error: walletError,
    isLoading: walletLoading,
    fetchData,
  } = useNetworkRequest({
    path: "wallets",
    method: METHOD.GET,
  });

  const walletModData = WalletData?.map(({ name, currency }: IWallet) => ({
    label: name,
    value: currency,
  }));

  const {
    fetchData: postData,
    error: postWalletError,
    isLoading: postWalletLoading,
  } = useNetworkRequest({
    path: "accounts",
    method: METHOD.POST,
    dataObj: JSON.stringify({ currency: value }),
  });

  useEffect(() => {
    fetchData();
    return () => {
      setPostError(false);
    };
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await postData();
      if (!res?.error) {
        fetchAccounts();
        setModal(false);
      } else {
        setPostError(true);
      }
    } catch (error) {}
  };

  if (walletLoading || loading) {
    return (
      <>
        <Close
          onClick={() => setModal(false)}
          aria-label={"Close button"}
          aria-labelledby={"Close button"}
        />
        <NoDataContainer>
          <Loader size={50} width={5} />
        </NoDataContainer>
      </>
    );
  }

  if (walletError)
    return (
      <NoDataContainer>
        <NetworkErrorCard
          reFetch={() => {
            setLoading(true);
          }}
        />
      </NoDataContainer>
    );

  return (
    <Container>
      <Close
        onClick={() => setModal(false)}
        aria-label={"Close button"}
        aria-labelledby={"Close button"}
      />
      <AddWalletBiggerText>Add new wallet</AddWalletBiggerText>
      <AddWalletDescText>
        The crypto wallet will be created instantly and be available in your
        list of wallets.
      </AddWalletDescText>
      <SelectItemText>Select wallet</SelectItemText>
      <Select
        value={value}
        onChange={(event) => setValue(event.target.value)}
        options={walletModData}
      ></Select>
      <Button
        aria-labelledby={postWalletLoading ? "Loading..." : "Create wallet"}
        aria-label={postWalletLoading ? "Loading..." : "Create wallet"}
        type="submit"
        onClick={() => handleSubmit()}
      >
        {postWalletLoading && !postWalletError && !postError ? (
          <>
            "Loading..." <Loader />
          </>
        ) : (
          "Create wallet"
        )}
      </Button>
      {postError && <NetworkErrorSmallCard />}
    </Container>
  );
};
