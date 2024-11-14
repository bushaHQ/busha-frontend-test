import { useState } from "react";
import useGetAccounts from "../model/queries/useGetAccounts";

function useWalletLogic() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: accounts,
    loading: isFetchingAccounts,
    error: accountsFetchError,
    refetch: refetchAccounts,
  } = useGetAccounts();

  // const {
  //   data: wallets,
  //   loading: isFetchingWallets,
  //   error: walletsFetchError,
  //   refetch: refetchWallets,
  // } = useGetWallets();

  // const onCreateWalletSuccess = () => {
  //   refetchAccounts();
  //   handleCloseModal();
  // }

  // const {
  //   loading: creatingAccount, error: errorCreatingAccount, createWallet,
  // } = useCreateAccount(onCreateWalletSuccess);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    accounts,
    isFetchingAccounts,
    accountsFetchError,
    refetchAccounts,
  };
}

export default useWalletLogic;
