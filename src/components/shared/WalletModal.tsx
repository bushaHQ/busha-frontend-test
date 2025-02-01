import styled from "styled-components";
import Modal from "./Modal";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import NetworkError from "./NetworkError";
import Loader from "./Loader";
import { IWallet } from "./Main";

const PaddedWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddWalletContainer = styled.div`
  padding: 50px 20px;
`;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const AddWalletText = styled.h2`
  color: #000;
  font-size: 24px;
  font-weight: 500;
`;

const CloseIcon = styled.img`
  width: 16px;
  aspect-ratio: 1;
  cursor: pointer;
`;

const DescriptionText = styled.p`
  color: #3e4c59;
  font-size: 18px;
  font-weight: 400;
  padding: 40px 0;
  max-width: 360px;
`;

const SelectionContainer = styled.div``;

const SelectWalletText = styled.h2`
  color: #3e4c59;
  font-size: 16px;
  font-weight: 500;
`;

const SelectInputContainer = styled.div`
  padding: 10px 0 20px;
`;

const Select = styled.select`
  height: 64px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #cbd2d9;
  padding: 10px;
  outline: none;
`;

const Option = styled.option``;

const CreateWalletButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 20px;
`;

const CreateWalletButton = styled.button`
  color: #fff;
  background-color: #000000;
  height: 54px;
  width: 186px;
  cursor: pointer;
  border-radius: 40px;
  outline: none;
  box-shadow: none;

  &:hover {
    opacity: 0.9;
  }
`;

const NetworkErrorContainer = styled.div`
  margin: 10px 0;
  border-radius: 8px;
  border: 1px solid #e0b3b2;
  background-color: #fff4f4;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ErrorIcon = styled.img``;

const NetworkErrorText = styled.p`
  color: #d72c0d;
  font-size: 16px;
  font-weight: 500;
`;

const CancelIcon = styled.img`
  cursor: pointer;
`;

interface IAccount {
  currency: string;
  imgURL: string;
  name: string;
  type: string;
}

const WalletModal = ({
  isOpen,
  onClose,
  setAccounts,
  accounts,
}: {
  isOpen: boolean;
  onClose: VoidFunction;
  setAccounts: Dispatch<SetStateAction<IWallet[]>>;
  accounts: IWallet[];
}) => {
  const [triggerNetworkClick, setTriggerNetworkClick] = useState(false);
  const [wallets, setWallets] = useState<IAccount[]>([]);
  const [loading, setLoading] = useState(false);
  const [showNetworkError, setShowNetworkError] = useState(false);

  const [createAccountLoading, setCreateAccountLoading] = useState(false);
  const [
    showCreateAccountNetworkError,
    setShowCreateAccountNetworkError,
  ] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState("");

  useEffect(() => {
    const isMounted = { current: true };

    const fetchWallets = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/wallets`
        );
        if (!response.ok && isMounted.current) {
          return setShowNetworkError(true);
        }
        const data = await response.json();
        if (isMounted.current) {
          setWallets(data);
        }
      } catch (error) {
        if (isMounted.current) {
          setShowNetworkError(true);
        }
      } finally {
        if (isMounted.current) {
          setLoading(false);
        }
      }
    };

    fetchWallets();

    return () => {
      isMounted.current = false;
    };
  }, [triggerNetworkClick]);
  return (
    <Modal isOpen={isOpen}>
      <>
        {loading ? (
          <PaddedWrapper>
            <Loader size={83} width={8} />
          </PaddedWrapper>
        ) : showNetworkError ? (
          <PaddedWrapper>
            <NetworkError
              tryAgainClick={async () => {
                setTriggerNetworkClick(true);
              }}
              loading={loading}
            />
          </PaddedWrapper>
        ) : wallets && wallets.length > 0 ? (
          <AddWalletContainer>
            <TopContainer>
              <AddWalletText>Add new wallet</AddWalletText>
              <CloseIcon
                aria-label="Close button"
                alt="Close button"
                src="close.svg"
                onClick={() => {
                  setLoading(false);
                  setShowNetworkError(false);
                  setWallets([]);
                  onClose();
                }}
              />
            </TopContainer>
            <DescriptionText>
              The crypto wallet will be created instantly and be available in
              your list of wallets.
            </DescriptionText>
            <SelectionContainer>
              <SelectWalletText>Select wallet</SelectWalletText>
              <SelectInputContainer>
                <Select
                  name="wallet"
                  placeholder="Select wallet"
                  onChange={(e) => {
                    setSelectedAccount(e.target.value);
                  }}
                  value={selectedAccount}
                >
                  {wallets.map((eachAccount: IAccount, index: number) => {
                    return (
                      <Option key={index} value={eachAccount?.currency}>
                        {eachAccount?.name}
                      </Option>
                    );
                  })}
                </Select>
              </SelectInputContainer>
              <CreateWalletButtonWrapper>
                <CreateWalletButton
                  disabled={createAccountLoading}
                  onClick={async () => {
                    try {
                      setCreateAccountLoading(true);
                      const response = await fetch(
                        `${process.env.REACT_APP_BASE_URL}/accounts`,
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({ currency: selectedAccount }),
                        }
                      );
                      if (!response.ok) {
                        return setShowCreateAccountNetworkError(true);
                      }
                      onClose();
                      const data = await response.json();
                      setAccounts([...accounts, data]);
                    } catch (error) {
                      setShowCreateAccountNetworkError(true);
                    } finally {
                      setCreateAccountLoading(false);
                    }
                  }}
                >
                  {createAccountLoading ? (
                    <Loader size={20} />
                  ) : (
                    "Create wallet"
                  )}
                </CreateWalletButton>
              </CreateWalletButtonWrapper>
            </SelectionContainer>

            {showCreateAccountNetworkError && (
              <NetworkErrorContainer>
                <ErrorWrapper>
                  <ErrorIcon src="alert.svg" alt="error" />
                  <NetworkErrorText>Network Error</NetworkErrorText>
                </ErrorWrapper>
                <CancelIcon
                  aria-label="Close button"
                  src="red-close.svg"
                  alt="error"
                  onClick={() => {
                    setShowCreateAccountNetworkError(false);
                  }}
                />
              </NetworkErrorContainer>
            )}
          </AddWalletContainer>
        ) : (
          ""
        )}
      </>
    </Modal>
  );
};

export default WalletModal;
