import React, { createContext, useEffect, useState } from "react";
import useGetAccounts from "../hooks/useGetAccounts";

interface ContextT {
  accounts: any[] | null;
  isFetchingAccounts: boolean;
  accountsFetchError: string | null;
  refetchAccounts: () => void;
  setFetchedAccounts: React.Dispatch<React.SetStateAction<any[] | null>>;
}

const AccountContext = createContext({
  accounts: [],
  isFetchingAccounts: false,
  accountsFetchError: "",
  refetchAccounts: () => null,
  setFetchedAccounts: () => { }
} as ContextT);

const Provider = AccountContext.Provider;

const AccountProvider = ({ children }: { children: React.ReactNode }) => {
  const [fetchedAccounts, setFetchedAccounts] = useState<any[] | null>([]);
  const {
    data,
    loading: isFetchingAccounts,
    error: accountsFetchError,
    refetch: refetchAccounts,
  } = useGetAccounts();

  useEffect(() => {
    setFetchedAccounts(data);
  }, [data])

  return (
    <Provider
      value={{
        accounts: fetchedAccounts,
        isFetchingAccounts,
        accountsFetchError,
        refetchAccounts,
        setFetchedAccounts,
      }}
    >
      {children}
    </Provider>
  );
};

export { AccountContext, AccountProvider };
