import { useContext, useEffect, useState } from "react";
import { getWallets } from "../../adapters/wallet";
import { AppContext } from "../../App";
import { LoadingScreen, NetworkError } from "../../components/accountList";
import { AddNewWallet } from "../../components/addWallet";
import Modal from "../../components/shared/Modal";
import { Card } from "../../styles/layout/UtilStyles";

const AddWalletPage = () => {
  // --- Check if the modal is open or not ---
  const { modalOpen, handleSetWalletList } = useContext(AppContext);

  // --- Make Requests Here ---
  const [isError, setIsError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      getWallets(handleSetWalletList, setIsError, setIsFetching);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpen]);

  return (
    <>
      <Modal isOpen={modalOpen}>
        <Card verticalCenter={!isError}>
          {isFetching ? (
            <LoadingScreen />
          ) : (
            <>
              {!isError ? (
                <AddNewWallet />
              ) : (
                <NetworkError
                  handleSetWalletList={handleSetWalletList}
                  setIsError={setIsError}
                  setIsFetching={setIsFetching}
                  isWalletNetwork={true}
                />
              )}
            </>
          )}
        </Card>
      </Modal>
    </>
  );
};

export default AddWalletPage;
