import { createContext, useCallback, useReducer, useRef } from "react";
import { Accountwallet, Option } from "../type/AccountWalletType";
import { CONFIG, URL } from "../api";

interface State {
  accounts: Accountwallet[];
  options: Option[];
  isLoading: boolean;
  isLoadingWallet: boolean;
  addingWallet: boolean;
  isSuccess: boolean;
  accountNetworkError: boolean;
  walletNetworkError: boolean;
  postNetworkError: boolean;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = {
  accounts: [],
  options: [],
  isLoading: false,
  isLoadingWallet: false,
  addingWallet: false,
  isSuccess: false,
  accountNetworkError: false,
  walletNetworkError: false,
  postNetworkError: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FETCH_ACCOUNTS_START":
      return { ...state, isLoading: true };
    case "FETCH_ACCOUNTS_SUCCESS":
      return { ...state, accounts: action.payload, isLoading: false };
    case "FETCH_ACCOUNTS_ERROR":
      return { ...state, isLoading: false, accountNetworkError: true };
    case "FETCH_WALLETS_START":
      return { ...state, isLoadingWallet: true };
    case "FETCH_WALLETS_SUCCESS":
      return { ...state, options: action.payload, isLoadingWallet: false };
    case "FETCH_WALLETS_ERROR":
      return { ...state, isLoadingWallet: false, walletNetworkError: true };
    case "ADD_ACCOUNT_START":
      return { ...state, addingWallet: true };
    case "ADD_ACCOUNT_SUCCESS":
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
        addingWallet: false,
        isSuccess: true,
      };
    case "ACCOUNT_NETWORK_ERROR":
      return { ...state, accountNetworkError: action.payload };
    case "WALLET_NETWORK_ERROR":
      return { ...state, walletNetworkError: action.payload };
    case "ADD_ACCOUNT_ERROR":
      return { ...state, addingWallet: false, postNetworkError: true };
    case "SET_SUCCESS":
      return { ...state, isSuccess: action.payload };
    default:
      return state;
  }
};

interface AppContextProviderProps {
  children: React.ReactNode;
}

export interface AppContextProps extends State {
  fetchAccounts: (network?: false) => void;
  fetchWallets: (network?: boolean) => void;
  cancelFetchAccounts: () => void;
  addAccount: (name: string, currency: string, balance: number) => void;
}

export const AppContext = createContext<AppContextProps | null>(null);

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const abortControllerInstanceRef = useRef<AbortController | null>(null);

  // fetch accounts
  const fetchAccounts = useCallback(
    async (network?: boolean): Promise<void> => {
      try {
        const abortController = new AbortController();
        const { signal } = abortController;

        abortControllerInstanceRef.current = abortController;

        dispatch({ type: "FETCH_ACCOUNTS_START" });
        const response = await fetch(`${URL}/accounts`, { signal });

        if (!response.ok) {
          throw Error("Could not fetch account wallets");
        }

        const accountData = await response.json();
        dispatch({ type: "FETCH_ACCOUNTS_SUCCESS", payload: accountData });
        dispatch({ type: "ACCOUNT_NETWORK_ERROR", payload: network });
      } catch (error: any) {
        dispatch({ type: "FETCH_ACCOUNTS_ERROR" });
      }
    },
    []
  );

  const cancelFetchAccounts = useCallback(() => {
    if (!abortControllerInstanceRef.current) {
      throw new Error("Please call fetchAccounts before using this function");
    }

    abortControllerInstanceRef.current.abort();
  }, []);

  // request to fetch wallet when add new form is clicked
  const fetchWallets = useCallback(async (network?: boolean): Promise<void> => {
    try {
      dispatch({ type: "FETCH_WALLETS_START" });
      const response = await fetch(`${URL}/wallets`);

      if (!response.ok) {
        throw Error("Could not fetch wallets");
      }

      const walletData = await response.json();
      dispatch({ type: "FETCH_WALLETS_SUCCESS", payload: walletData });
      dispatch({ type: "WALLET_NETWORK_ERROR", payload: network });
    } catch (error: any) {
      console.log("error fetching options", error);
      dispatch({ type: "FETCH_WALLETS_ERROR" });
    }
  }, []);

  // For adding a new account
  const addAccount = useCallback(
    async (name: string, currency: string, balance: number): Promise<void> => {
      try {
        dispatch({ type: "ADD_ACCOUNT_START" });
        CONFIG.body = JSON.stringify({ name, currency, balance });
        const response = await fetch(`${URL}/accounts`, CONFIG);

        if (response.ok) {
          const newAccount = await response.json();
          dispatch({ type: "ADD_ACCOUNT_SUCCESS", payload: newAccount });
          dispatch({ type: "SET_SUCCESS", payload: false });
        } else {
          throw new Error("There was an error adding the account");
        }
      } catch (error: any) {
        console.log(error);
        dispatch({ type: "ADD_ACCOUNT_ERROR" });
      }
    },
    []
  );

  const valueToShare = {
    ...state,
    fetchAccounts,
    fetchWallets,
    addAccount,
    cancelFetchAccounts,
  };

  return (
    <AppContext.Provider value={valueToShare}>{children}</AppContext.Provider>
  );
}
