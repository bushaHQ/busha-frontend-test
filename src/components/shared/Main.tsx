import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Loader from "./Loader";
import NetworkError from "./NetworkError";
import WalletModal from "./WalletModal";

const Wrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  min-height: calc(100vh - 56px);
`;

const InnerWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 0 30px;

  @media only screen and (max-width: 760px) {
    padding: 30px 0 60px;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  width: calc(100% - 20px);
  padding: 0 10px;
  gap: 20px;

  @media only screen and (max-width: 760px) {
    flex-direction: column;
  }
`;

const SidebarWrapper = styled.div`
  width: 20%;
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 760px) {
    width: 100%;
    flex: 0 0 100%;
    flex-direction: row;
    overflow-x: scroll;
  }
`;

const EachSidebarItemWrapper = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 44px;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#f5f7fa" : "transparent")};
`;

const InnerSidebarItemWrapper = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
`;

const InnerSidebarItemText = styled.h2<{ isActive: boolean }>`
  font-size: 16px;
  font-weight: ${(props) => (props.isActive ? "500" : "400")};
  color: ${(props) => (props.isActive ? "#000000" : "#3e4c59")};
`;

const MainContentWrapper = styled.div`
  width: 78%;
  flex: 0 0 78%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media only screen and (max-width: 760px) {
    width: 100%;
    flex: 0 0 100%;
  }
`;

const MainContentTopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #d3d5d880;
`;

const PageTitle = styled.h2`
  color: #000000;
  font-size: 32px;
  font-weight: 700;
`;

const AddWalletText = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

const MainContentBottomWrapper = styled.div``;

const MainContentBottomInnerWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;

  @media only screen and (max-width: 760px) {
    gap: 30px;
  }
`;

const EachCardWrapper = styled.div`
  flex: 0 0 30%;
  width: 30%;

  @media only screen and (max-width: 1118px) {
    width: 47%;
    flex: 0 0 47%;
  }

  @media only screen and (max-width: 874px) {
    width: 45%;
    flex: 0 0 45%;
  }

  @media only screen and (max-width: 760px) {
    width: 46%;
    flex: 0 0 46%;
  }

  @media only screen and (max-width: 560px) {
    width: 100%;
    flex: 0 0 100%;
  }
`;

const PaddedWrapper = styled.div`
  height: 100%;
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface IWallet {
  id: string;
  currency: string;
  hold: string;
  pending_balance: string;
  balance: string;
  name: string;
  type: string;
  deposit: boolean;
  payout: boolean;
  imgURL: string;
}

const Main = () => {
  const [triggerNetworkClick, setTriggerNetworkClick] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>("Wallets");

  const [accounts, setAccounts] = useState<IWallet[]>([]);
  const [loading, setLoading] = useState(false);
  const [showNetworkError, setShowNetworkError] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);

  useEffect(() => {
    const isMounted = { current: true };

    const fetchAccounts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/accounts`
        );
        if (!response.ok) {
          return setShowNetworkError(true);
        }
        const data = await response.json();
        if (isMounted.current) {
          setAccounts(data);
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

    fetchAccounts();

    return () => {
      isMounted.current = false;
    };
  }, [triggerNetworkClick]);
  return (
    <>
      {" "}
      <Wrapper>
        <InnerWrapper>
          <MainWrapper>
            <SidebarWrapper>
              {["Wallets", "Prices", "Peer2Peer", "Activity", "Settings"].map(
                (eachItem: string, index: number) => {
                  return (
                    <EachSidebarItemWrapper
                      key={index}
                      onClick={() => {
                        setActiveMenu(eachItem);
                      }}
                      isActive={eachItem === activeMenu}
                    >
                      <InnerSidebarItemWrapper>
                        <InnerSidebarItemText
                          isActive={eachItem === activeMenu}
                        >
                          {eachItem}
                        </InnerSidebarItemText>
                      </InnerSidebarItemWrapper>
                    </EachSidebarItemWrapper>
                  );
                }
              )}
            </SidebarWrapper>
            <MainContentWrapper>
              <MainContentTopWrapper>
                <PageTitle>Wallet</PageTitle>
                {accounts && accounts.length > 0 && (
                  <AddWalletText
                    onClick={() => {
                      setShowWalletModal(true);
                    }}
                  >
                    + Add new wallet
                  </AddWalletText>
                )}
              </MainContentTopWrapper>

              <MainContentBottomWrapper>
                {loading ? (
                  <PaddedWrapper>
                    <Loader size={83} width={8} />
                  </PaddedWrapper>
                ) : showNetworkError ? (
                  <PaddedWrapper>
                    <NetworkError
                      tryAgainClick={async () => {
                        setTriggerNetworkClick(!triggerNetworkClick);
                      }}
                      loading={loading}
                    />
                  </PaddedWrapper>
                ) : accounts && accounts.length > 0 ? (
                  <MainContentBottomInnerWrapper>
                    {accounts.map((eachData: IWallet, index: number) => {
                      return (
                        <EachCardWrapper key={Date.now() * Math.random()}>
                          <Card data={eachData} />
                        </EachCardWrapper>
                      );
                    })}
                  </MainContentBottomInnerWrapper>
                ) : (
                  ""
                )}
              </MainContentBottomWrapper>
            </MainContentWrapper>
          </MainWrapper>
        </InnerWrapper>
      </Wrapper>
      {showWalletModal && (
        <WalletModal
          isOpen={showWalletModal}
          onClose={() => {
            setShowWalletModal(false);
          }}
          setAccounts={setAccounts}
          accounts={accounts}
        />
      )}
    </>
  );
};

export default Main;
