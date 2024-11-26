import { useContext, useState } from "react";
import { AccountContext } from "../context/AccountContext";

function useWalletLogic() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    accounts,
    isFetchingAccounts,
    accountsFetchError,
    refetchAccounts,
  } = useContext(AccountContext);


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
