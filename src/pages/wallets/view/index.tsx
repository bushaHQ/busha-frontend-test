import styled from "styled-components";
import AddWalletModal from "./AddWalletModal";
import WalletList from "./WalletList";
import useWalletLogic from "../controller/useWalletLogic";
import Loader from "../../../components/shared/Loader";
import RenderIf from "../../../utils/RenderIf";
import ErrorComponent from "../../../components/home/ErrorComponent";

const Wallet = () => {
  const {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    accounts,
    isFetchingAccounts,
    accountsFetchError,
    refetchAccounts
  } = useWalletLogic();

  return (
    <Container>
      <RenderIf condition={accountsFetchError === "Network error"}>
        <ErrorContainer>
          <ErrorComponent onClick={refetchAccounts} isLoading={isFetchingAccounts} errorText="Network Error" />
        </ErrorContainer>
      </RenderIf>

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
          <Hr />
          <WalletList wallets={accounts} />
        </>
      </RenderIf>

      <AddWalletModal
        refetchAccounts={refetchAccounts}
        onClose={handleCloseModal}
        isOpen={isModalOpen}
      />
    </Container>
  );
};

export default Wallet;

const Container = styled.div`
  margin-top: -30px;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #000000;
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

const Hr = styled.hr`
  border: 1px solid #d3d5d880;
  margin-top: -10px;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 170px;
`;

const ErrorContainer = styled.div`
  margin-top: 20%;
`