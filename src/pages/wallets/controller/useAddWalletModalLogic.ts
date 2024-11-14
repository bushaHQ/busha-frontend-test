import useCreateAccount from "../model/mutations/useCreateAccount";
import useGetWallets from "../model/queries/useGetWallets";

function useAddWalletModalLogic(
  refetchAccounts: () => void,
  handleCloseModal: () => void
) {
  const {
    data: wallets,
    loading: isFetchingWallets,
    error: walletsFetchError,
    refetch: refetchWallets,
  } = useGetWallets();

  const onCreateWalletSuccess = () => {
    refetchAccounts();
    handleCloseModal();
  };

  const {
    loading: creatingAccount,
    error: errorCreatingAccount,
    createWallet,
  } = useCreateAccount(onCreateWalletSuccess);

  return {
    creatingAccount,
    errorCreatingAccount,
    createWallet,
    wallets,
    isFetchingWallets,
    walletsFetchError,
    refetchWallets,
  };
}

export default useAddWalletModalLogic;
