import styled from "styled-components";
import close from "../asset/image/close.svg";
import smallnetworkicon from "../asset/image/smallnetworkerroricon.svg";
import networkcloseicon from "../asset/image/networkcloseicon.svg";

import { useAppContext } from "../hook/useAppContext";
import { AppContextProps } from "../context/appContext";
import Loader from "./shared/Loader";
import { Select } from "./Select";
import { NetworkError } from "./NetworkError";
import { useEffect } from "react";

interface NewWalletProps {
  handleClose: () => void;
}

export const NewWallet = ({ handleClose }: NewWalletProps) => {
  const {
    isLoadingWallet,
    walletNetworkError,
    postNetworkError,
    fetchWallets,
  } = useAppContext() as AppContextProps;

  const network = false;

  useEffect(() => {
    fetchWallets();
  }, [fetchWallets]);

  const handleTryAgain = () => {
    fetchWallets(network);
  };

  return (
    <div>
      {walletNetworkError ? (
        <NetworkError marginTop={200} onTry={handleTryAgain} />
      ) : (
        <WalletContainer>
          <Header>
            <h1>Add new wallet</h1>
            <img
              onClick={handleClose}
              aria-label="Close button"
              src={close}
              alt=""
            />
          </Header>
          {isLoadingWallet ? (
            <LoaderContainer>
              <Loader width={8} size={84} />
            </LoaderContainer>
          ) : (
            <div>
              <Text>
                <p>
                  The crypto wallet will be created instantly <br /> and be
                  available in your list of wallets.
                </p>
              </Text>
              <SelectContainer>
                <p>Select wallet</p>
                <Select handleClose={handleClose} />
              </SelectContainer>
              {postNetworkError && (
                <Error>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img src={smallnetworkicon} alt="" /> <p>Network Error</p>
                  </div>
                  <div>
                    <img src={networkcloseicon} alt="" />
                  </div>
                </Error>
              )}
            </div>
          )}
        </WalletContainer>
      )}
    </div>
  );
};

// const NetworkErrorContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 126px;
// `;

const WalletContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 74px 24px 0 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 49px;

  & h1 {
    color: #000;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
  }

  & img {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

const Text = styled.div`
  & p {
    color: #3e4c59;
    font-size: 18px;
    line-height: 26px;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 43px;

  & p {
    color: #3e4c59;
    font-size: 16px;
    font-family: Aribau Grotesk;
    font-weight: 500;
    line-height: 16px;
    margin-bottom: 14px;
  }
`;

const Error = styled.div`
  display: flex;
  margin-top: 45px;
  padding: 13px 20px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #e0b3b2;
  background: #fff4f4;

  & p {
    margin-left: 14px;
    color: #d72c0d;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
`;
