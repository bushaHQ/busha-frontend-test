import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  AccountActions,
  AccountData,
  AccountState,
  HomeLayoutProps,
  WalletData,
} from "../types";

const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://busha-server.onrender.com/"
    : "http://localhost:3090/";

export const AccountContext = createContext<AccountState>({} as AccountState);

export const AccountActionsContext = createContext<AccountActions>({} as AccountActions);

export function AccountProvider({ children }: HomeLayoutProps) {
  const [loadingAccounts, setLoadingAccounts] = useState<boolean>(false);
  const [isApiSubscribed, setIsApiSubscribed] = useState<boolean>(true);
  const [accounts, setAccount] = useState<AccountData[]>([]);
  const [accountError, setAccountError] = useState<boolean>(false);
  const [loadingWallet, setLoadingWallet] = useState<boolean>(false);
  const [wallet, setWallet] = useState<WalletData[]>([]);
  const [walletError, setWalletError] = useState<boolean>(false);
  const [addWalletLoading, setAddWalletLoading] = useState<boolean>(false);
  const [addWalletError, setaddWalletError] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      setIsApiSubscribed(false);
    };
  }, []);

  const getAccounts = async () => {
    if (isApiSubscribed) {
      try {
        setLoadingAccounts(true);
        const data = await fetch(BASE_URL + "accounts");
        const json = await data.json();
        setAccount(json);
      } catch (error) {
        setAccountError(true);
      } finally {
        setLoadingAccounts(false);
      }
    }
  };

  const getWallets = async () => {
    if (isApiSubscribed) {
      try {
        setLoadingWallet(true);
        const data = await fetch(BASE_URL + "wallets");
        const json = await data.json();
        setWallet(json);
      } catch (error) {
        setWalletError(true);
      } finally {
        setLoadingWallet(false);
      }
    }
  };

  const createWallet = async (
    currency: string,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
  ) => {
    try {
      setAddWalletLoading(true);
      const data = await fetch(BASE_URL + "accounts", {
        method: "POST",
        body: JSON.stringify({ currency }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await data.json();
      if (json.error) {
        setaddWalletError(true);
      } else {
        setAccount([...accounts, json]);
        setIsModalOpen(false);
      }
    } catch (error) {
      setaddWalletError(true);
    } finally {
      setAddWalletLoading(false);
    }
  };

  return (
    <AccountActionsContext.Provider
      value={{ getAccounts, getWallets, createWallet, setaddWalletError }}
    >
      <AccountContext.Provider
        value={{
          loadingAccounts,
          accounts,
          accountError,
          loadingWallet,
          wallet,
          walletError,
          addWalletLoading,
          addWalletError,
        }}
      >
        {children}
      </AccountContext.Provider>
    </AccountActionsContext.Provider>
  );
}
