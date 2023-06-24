import { createContext, useCallback, useState, useRef } from "react";
import { Accountwallet, Option } from "../type/AccountWalletType";
import { CONFIG, URL } from "../api";

interface AppContextProviderProps {
  children: React.ReactNode;
}

export interface AppContextProps {
  accounts: Accountwallet[];
  options: Option[];
  fetchAccounts: () => void;
  tryAccountAgain: () => void;
  tryWalletAgain: () => void;
  fetchWallets: () => void;
  cancelFetchAccounts: () => void;
  addAccount: (name: string, currency: string, balance: number) => void;
  isLoading: boolean;
  isLoadingWallet: boolean;
  addingWallet: boolean;
  isSuccess: boolean;
  accountNetworkError: boolean;
  walletNetworkError: boolean;
  postNetworkError: boolean;
}

export const AppContext = createContext<AppContextProps | null>(null);

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [accounts, setAccounts] = useState<Accountwallet[]>([]);
  const [options, setOptions] = useState<Option[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingWallet, setIsLoadingWallet] = useState(false);
  const [addingWallet, setAddingWallet] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const [accountNetworkError, setAccountNetworkError] = useState(false);
  const [walletNetworkError, setWalletNetworkError] = useState(false);
  const [postNetworkError, setPostNetworkError] = useState(false);
  const abortControllerInstanceRef = useRef<AbortController | null>(null);

  // fetch accounts
  const fetchAccounts = useCallback(async (): Promise<void> => {
    try {
      // Create the signal that should be used to cancel the request
      const abortController = new AbortController();
      const { signal } = abortController;

      abortControllerInstanceRef.current = abortController;

      setIsLoading(true);
      const response = await fetch(`${URL}/accounts`, {
        signal,
      });

      if (!response.ok) {
        throw Error("Could not fetch account wallets");
      }
      const accountData = await response.json();
      setAccounts(accountData);
      setIsLoading(false);
      console.log(accountData, "accounts");
    } catch (error: any) {
      setIsLoading(false);
      setAccountNetworkError(true);
    }
  }, []);

  const cancelFetchAccounts = useCallback(() => {
    if (!abortControllerInstanceRef.current) {
      throw new Error("Please call fetch Accounts before using this function");
    }

    abortControllerInstanceRef.current.abort();
  }, []);

  // request to fetch accounts again when there is a network error
  const tryAccountAgain = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await fetch(`${URL}/accounts`);

      if (!response.ok) {
        throw new Error("Could not fetch account wallets");
      }

      const accountData = await response.json();
      setAccounts(accountData);
      setIsLoading(false);
      setAccountNetworkError(false);
    } catch (error: any) {
      setIsLoading(false);
      setAccountNetworkError(true);
    }
  };

  // request to fetch wallet when add new form is clicked
  const fetchWallets = useCallback(async (): Promise<void> => {
    try {
      setIsLoadingWallet(true);
      const response = await fetch(`${URL}/wallets`);
      if (!response.ok) {
        throw Error("Could not fetch wallets");
      }
      const walletData = await response.json();
      setOptions(walletData);
      setIsLoadingWallet(false);
    } catch (error: any) {
      console.log("error fetching options", error);
      setIsLoadingWallet(false);
      setWalletNetworkError(true);
    }
  }, []);

  // request to fetch wallets again when there is a network error
  const tryWalletAgain = async (): Promise<void> => {
    try {
      setIsLoadingWallet(true);
      const response = await fetch(`${URL}/wallets`);

      if (!response.ok) {
        throw new Error("Could not fetch account wallets");
      }

      const walletData = await response.json();
      setOptions(walletData);

      setIsLoadingWallet(false);
      setWalletNetworkError(false);
    } catch (error: any) {
      setIsLoading(false);
      setWalletNetworkError(true);
    }
  };

  // For adding new account
  const addAccount = async (
    name: string,
    currency: string,
    balance: number
  ): Promise<void> => {
    try {
      setAddingWallet(true);
      CONFIG.body = JSON.stringify({ name, currency, balance });
      const response = await fetch(`${URL}/accounts`, CONFIG);

      if (response.ok) {
        setSuccess(true);
        const newAccount = await response.json();
        const updatedAccounts = [...accounts, newAccount];
        setAddingWallet(false);
        setAccounts(updatedAccounts);
        setSuccess(false);
      } else {
        throw new Error("There was an error adding the account");
      }
    } catch (error: any) {
      console.log(error);
      setAddingWallet(false);
      setPostNetworkError(true);
    }
  };

  const valueToShare = {
    accounts,
    fetchAccounts,
    tryAccountAgain,
    fetchWallets,
    tryWalletAgain,
    addAccount,
    isLoading,
    isLoadingWallet,
    addingWallet,
    isSuccess,
    accountNetworkError,
    walletNetworkError,
    postNetworkError,
    cancelFetchAccounts,
    options,
  };

  return (
    <AppContext.Provider value={valueToShare}>{children}</AppContext.Provider>
  );
}
