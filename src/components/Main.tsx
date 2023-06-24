import { useEffect } from "react";
import styled from "styled-components";
import { useAppContext } from "../hook/useAppContext";
import Loader from "./shared/Loader";
import { NetworkError } from "./NetworkError";
import { AppContextProps } from "../context/appContext";
import { Card } from "./Card";

interface MainProps {
  handleOpen: () => void;
}

export const Main = ({ handleOpen }: MainProps) => {
  const {
    fetchAccounts,
    cancelFetchAccounts,
    tryAccountAgain,
    accounts,
    isLoading,
    accountNetworkError,
  } = useAppContext() as AppContextProps;

  useEffect(() => {
    fetchAccounts();
    return () => {
      cancelFetchAccounts();
    };
  }, [fetchAccounts, cancelFetchAccounts]);

  return (
    <MainContainer>
      <Header>
        <h1>Wallets</h1>
        {accountNetworkError ? (
          ""
        ) : (
          <div>
            {isLoading ? (
              ""
            ) : (
              <button onClick={handleOpen}>+ Add new wallet</button>
            )}
          </div>
        )}
      </Header>
      {accountNetworkError ? (
        <NetworkErrorContainer>
          <NetworkError marginTop={126} onTry={tryAccountAgain} />
        </NetworkErrorContainer>
      ) : (
        <div>
          {isLoading ? (
            <LoaderContainerStyle>
              <Loader width={8} size={84} />
            </LoaderContainerStyle>
          ) : (
            <CardContainer>
              {accounts.map((account) => {
                return <Card key={account.id} account={account} />;
              })}
            </CardContainer>
          )}
        </div>
      )}
    </MainContainer>
  );
};

const LoaderContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 170px;
`;

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 65px;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  align-items: center;

  & h1 {
    color: #000;
    font-size: 32px;
    font-weight: 700;
    line-height: 32px;
  }

  & button {
    color: #000;
    text-align: right;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    border: none;
    background: #fff;
    outline: none;
    cursor: pointer;
  }
`;

const NetworkErrorContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: auto auto auto;
  padding: 24px 4px 0 11px;
  border-top: 1px solid rgba(211, 213, 216, 0.5);
`;
