import { useContext, useEffect, useState } from "react";
import useCreateAccount from "./useCreateAccount";
import useGetWallets from "./useGetWallets";
import { AccountContext } from "../context/AccountContext";

function useAddWalletModalLogic(
  handleCloseModal: () => void
) {
  const [selectedWalletValue, setSelectedWalletValue] = useState("");
  const { setFetchedAccounts } = useContext(AccountContext);

  const {
    data: wallets,
    loading: isFetchingWallets,
    error: walletsFetchError,
    refetch: refetchWallets,
  } = useGetWallets();

  console.log(selectedWalletValue)

  useEffect(() => {
    if(wallets?.length && selectedWalletValue === "") {
      setSelectedWalletValue(wallets[0].name)
    }
    return () => {};
  }, [wallets]);

  const onCreateWalletSuccess = (res: any) => {
    console.log(selectedWalletValue)
    const newWallet = {
      ...res
    }
    handleCloseModal();
    setFetchedAccounts((initialAccounts: any) => [...initialAccounts, newWallet])
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
    selectedWalletValue,
    setSelectedWalletValue
  };
}

export default useAddWalletModalLogic;
