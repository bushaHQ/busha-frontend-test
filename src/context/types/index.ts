export type StateType = {
  accounts: { data: AccountsType[]; status?: string };
  wallets: { data: WalletsType[]; status?: string };
  addAccount: { status?: string };
};
interface GetWalletAction {
  type: "GET_WALLET";
  payload: WalletsType[];
}
interface GetAccountAction {
  type: "GET_ACCOUNT";
  payload: AccountsType[];
}
interface FetchLoadingAccountAction {
  type: "LOADING_ACCOUNTS";
  status: LoadStatus;
}

interface FetchLoadingWalletAction {
  type: "LOADING_WALLETS";
  status: LoadStatus;
}

interface FetchLoadingAddAccount {
  type: "LOADING_ADD_ACCOUNT";
  status: LoadStatus;
}

type LoadStatus = "idle" | "pending" | "resolved" | "rejected";

type WalletsType = {
  currency: string;
  name: string;
  type: string;
  imgURL: string;
};

export type AccountsType = {
  id: string;
  currency: string;
  hold: string;
  pendingBalance: string;
  balance: string;
  name: string;
  type: string;
  deposit?: boolean;
  payout?: boolean;
  imgURL: string;
};

export type AllActions =
  | GetAccountAction
  | GetWalletAction
  | FetchLoadingAccountAction
  | FetchLoadingWalletAction
  | FetchLoadingAddAccount;
