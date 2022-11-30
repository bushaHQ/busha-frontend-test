import { Dispatch, SetStateAction, ReactNode } from "react";

export type AccountData = {
  id: string;
  currency: string;
  hold: string;
  pending_balance: string;
  balance: string;
  name: string;
  type: string;
  deposit: boolean;
  payout: boolean;
  imgURL: string;
};

export type WalletData = {
  currency: string;
  name: string;
  type: string;
  imgURL: string;
};

export type HomeLayoutProps = {
  children: ReactNode;
};

export type AddWalletProps = {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export type AccountState = {
  loadingAccounts: boolean;
  accounts: AccountData[];
  accountError: boolean;
  loadingWallet: boolean;
  wallet: WalletData[];
  walletError: boolean;
  addWalletLoading: boolean;
  addWalletError: boolean;
};

export type AccountActions = {
  getAccounts: () => Promise<void>;
  getWallets: () => Promise<void>;
  createWallet: (
    currency: string,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
  ) => Promise<void>;
  setaddWalletError: Dispatch<SetStateAction<boolean>>;
};

export type ErrorProps = {
  action: () => Promise<void>;
};
