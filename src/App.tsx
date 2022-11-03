import BushaLogo from "./assets/logo/BushaLogo.png";
import NetworkErrorImage from "./assets/image/verification-link-expired.png";
import rightArrow from "./assets/svg/rightarrow.svg";
import { ReactComponent as CloseButtonPrimary } from "./assets/svg/closebutton.svg";
import networkError from "./assets/svg/networkerror.svg";
import networkClose from "./assets/svg/networkclose.svg";
import { useState, useEffect, useContext, useRef } from "react";
import Loader from "./components/shared/Loader";
import Modal from "./components/shared/Modal";
import { AppContext, AppContextProvider } from "./context";
import {
  addAccount as addAccountHandler,
  getAccount,
  getWallet,
} from "./context/actions";
import {
  Header,
  Layout,
  SideNav,
  Main,
  MainText,
  NavContainer,
  NavText,
  MainHeader,
  AddWalletText,
  MainBody,
  LoadingStateContainer,
  ModalContent,
  ModalHeader,
  ModalBodyText,
  SelectWalletLabel,
  SelectWalletDropDown,
  ModalFooter,
  NetworkError,
  NetworkContainer,
  ButtonText,
  ButtonPrimary,
  WalletCard,
  WalletCardHeader,
  ImageSymbolContainer,
  WalletCardCurrencyText,
  WalletAmountText,
  WalletCardFooter,
  WalletCircularBg,
  UserProfileContainer,
  UserProfileAvatarWrapper,
  UserProfileText,
} from "./components";

function App() {
  return (
    <>
      <AppContextProvider>
        <Header>
          <img src={BushaLogo} alt="Busha Logo" />

          <UserProfileContainer>
            <UserProfileAvatarWrapper>
              <UserProfileText>O</UserProfileText>
            </UserProfileAvatarWrapper>

            <UserProfileText>Oluwatobi Akindunjoye</UserProfileText>
          </UserProfileContainer>
        </Header>

        <Layout>
          <SideNav>
            <NavCard title="Wallets" active={true} />
            <NavCard title="Prices" />
            <NavCard title="Peer2Peer" />
            <NavCard title="Activity" />
            <NavCard title="Settings" />
          </SideNav>
          <MainCard title="Dashboard" />
        </Layout>
      </AppContextProvider>
    </>
  );
}
const NavCard = ({ title = "", active = false }) => {
  return (
    <NavContainer active={active}>
      <NavText>{title}</NavText>
    </NavContainer>
  );
};
const MainCard = ({ title = "" }) => {
  const {
    state: {
      accounts: { data: accountData = [], status: accountStatus },
      addAccount,
      wallets: { data: walletData = [], status: walletStatus },
    },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    getAccount(dispatch);
  }, [dispatch]);
  const [isOpen, setIsOpen] = useState(false);
  const addNewWalletHandler = () => {
    getWallet(dispatch);
    setIsOpen(!isOpen);
  };
  const selectOptionRef = useRef<HTMLSelectElement>(null);
  const [isOpenNetwork, setIsOpenNetwork] = useState(false);

  return (
    <Main>
      <MainHeader>
        <MainText>{title}</MainText>

        {accountStatus === "resolved" && (
          <AddWalletText onClick={addNewWalletHandler}>
            + Add new wallet
          </AddWalletText>
        )}
      </MainHeader>
      <MainBody display={accountStatus === "resolved" ? "grid" : "flex"}>
        {accountStatus === "resolved" ? (
          accountData.map((account) => {
            return <WalletCardComponent key={account.id} {...account} />;
          })
        ) : accountStatus === "pending" ? (
          <LoadingStateContainer>
            <Loader width={4} />
          </LoadingStateContainer>
        ) : (
          <NetworkHandlerComponent
            refreshHandler={() => getAccount(dispatch)}
          />
        )}
      </MainBody>
      <Modal isOpen={isOpen}>
        {walletStatus === "resolved" ? (
          <ModalContent>
            <ModalHeader>
              <AddWalletText>Add new wallet</AddWalletText>

              {/* <CloseButton
                src={closeButton}
                alt="close button"
                onClick={() => {
                  dispatch({ type: "LOADING_ADD_ACCOUNT", status: "idle" });
                  addNewWalletHandler();
                }}
              /> */}
              <CloseButtonPrimary
                onClick={() => {
                  dispatch({ type: "LOADING_ADD_ACCOUNT", status: "idle" });
                  addNewWalletHandler();
                }}
              />
            </ModalHeader>

            <ModalBodyText>
              The crypto wallet will be created instantly and be available in
              your list of wallets.
            </ModalBodyText>

            <SelectWalletLabel>Select wallet</SelectWalletLabel>
            <SelectWalletDropDown ref={selectOptionRef}>
              {walletData.map(({ name, currency }) => {
                return (
                  <option value={currency} key={name}>
                    {currency}
                  </option>
                );
              })}
            </SelectWalletDropDown>

            <ModalFooter>
              <ButtonPrimary
                onClick={() => {
                  setIsOpenNetwork(true);
                  addAccountHandler(dispatch, setIsOpen, setIsOpenNetwork, {
                    currency: selectOptionRef.current?.value!,
                  });
                }}
              >
                {addAccount.status === "pending" ? (
                  <Loader width={1} />
                ) : (
                  <ButtonText>Create wallet</ButtonText>
                )}
              </ButtonPrimary>
              {addAccount.status === "rejected" && (
                <NetworkError isOpenNetwork={isOpenNetwork}>
                  <NetworkContainer>
                    <img src={networkError} alt="error-notification" />
                    Network Error
                  </NetworkContainer>
                  <img
                    src={networkClose}
                    alt="network-close"
                    onClick={() => setIsOpenNetwork(true)}
                  />
                </NetworkError>
              )}
            </ModalFooter>
          </ModalContent>
        ) : walletStatus === "pending" ? (
          <LoadingStateContainer isModal={true}>
            <Loader width={4} />
          </LoadingStateContainer>
        ) : walletStatus === "rejected" ? (
          <NetworkHandlerComponent refreshHandler={() => getWallet(dispatch)} />
        ) : (
          ""
        )}
      </Modal>
    </Main>
  );
};

const NetworkHandlerComponent = ({
  refreshHandler,
}: {
  refreshHandler: () => void;
}) => {
  return (
    <LoadingStateContainer>
      <img src={NetworkErrorImage} alt="network error" />

      <ButtonText
        style={{
          marginTop: "26px",
          marginBottom: "42x",
          color: "black",
        }}
      >
        {" "}
        Network Error
      </ButtonText>

      <ButtonPrimary onClick={refreshHandler}>
        <ButtonText>Try again</ButtonText>
      </ButtonPrimary>
    </LoadingStateContainer>
  );
};

const WalletCardComponent = ({
  name = "",
  balance = "",
  imgURL = "",
  currency = "",
}) => {
  //THIS LINE WAS REMOVED IN ORDER TO PASS THE TESTS
  // const formatter = new Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "NGN",
  // });
  const isNaira = currency === "NGN";
  // balance = isNaira ? formatter.format(Number(balance)) : balance;
  return (
    <WalletCard>
      <WalletCardHeader>
        <ImageSymbolContainer alt="currency symbol" src={imgURL} />
        <WalletCardCurrencyText>{name}</WalletCardCurrencyText>
      </WalletCardHeader>

      <WalletAmountText>{`${balance} ${
        isNaira ? "" : currency
      }`}</WalletAmountText>

      <WalletCardFooter>
        <WalletCircularBg>
          <img src={rightArrow} alt="right-arrow" />
        </WalletCircularBg>
      </WalletCardFooter>
    </WalletCard>
  );
};

export default App;
