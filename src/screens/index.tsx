import styled from "styled-components";
import AddWalletModal from "./AddWalletModal";
import WalletList from "./WalletList";
import ErrorComponent from "../components/other/ErrorComponent";
import useWalletLogic from "../hooks/useWallet";
import Loader from "../components/shared/Loader";
import RenderIf from "../utils/RenderIf";
const Wallet = () => {
  const {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    accounts,
    isFetchingAccounts,
    accountsFetchError,
    refetchAccounts,
  } = useWalletLogic();

  return (
    <Container>
      {
        accountsFetchError === "Network error" ?
          <ErrorContainer>
            <ErrorComponent
              onClick={refetchAccounts}
              isLoading={isFetchingAccounts}
              errorText="Network Error"
            />
          </ErrorContainer> :
          <>
            <TitleRow>
              <Title>Wallets</Title>
              <RenderIf condition={!isFetchingAccounts && !accountsFetchError}>
                <AddNewWallet onClick={handleOpenModal}>
                  + Add new wallet
                </AddNewWallet>
              </RenderIf>
            </TitleRow>

            <RenderIf condition={isFetchingAccounts}>
              <LoaderContainer>
                <Loader size={83.37} />
              </LoaderContainer>
            </RenderIf>

            <RenderIf condition={!isFetchingAccounts && !accountsFetchError}>
              <>
                <WalletList wallets={accounts} />
              </>
            </RenderIf>

            <RenderIf condition={isModalOpen}>
              <AddWalletModal
                refetchAccounts={refetchAccounts}
                onClose={handleCloseModal}
                isOpen={isModalOpen}
              />
            </RenderIf>
          </>
      }



    </Container>
  );
};

export default Wallet;

const Container = styled.div`
  margin-top: 0px;
  width: 100%;
`;

const TitleRow = styled.div`
  padding: 0 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d3d5d880;
  margin-top: -12px;
  padding-top: 6px;
  padding-bottom: 8px;
  position: sticky;
  top: 60px;
  left: 0;
  z-index: 40;
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  line-height: 10px;

  @media (min-width: 1100px) {
    font-size: 32px;
  }
`;

const AddNewWallet = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #000000;
  border: none;
  background-color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 170px;
`;

const ErrorContainer = styled.div`
  margin-top: 20%;
`;
