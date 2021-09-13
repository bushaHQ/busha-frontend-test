import { useContext } from "react";
import { useState, useEffect } from "react";
import { getAccounts } from "../../adapters/wallet";
import { AppContext } from "../../App";

import { LoadingScreen, NetworkError } from "../../components/accountList";
import Wallets from "../../components/accountList/Wallets";
import Layout from "../../components/layouts/Layout";

const WalletPage = () => {
  const [isError, setIsError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const { handleSetAccountsList } = useContext(AppContext);

  useEffect(() => {
    getAccounts(handleSetAccountsList, setIsError, setIsFetching);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Layout addWallet={!isError}>
        {isFetching ? (
          <LoadingScreen />
        ) : (
          <>
            {/* --- Check if success or error */}
            {!isError ? (
              <Wallets />
            ) : (
              <NetworkError
                handleSetAccountsList={handleSetAccountsList}
                setIsError={setIsError}
                setIsFetching={setIsFetching}
              />
            )}
          </>
        )}
      </Layout>
    </>
  );
};

export default WalletPage;
