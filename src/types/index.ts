import { Dispatch, SetStateAction } from "react";

export enum ApiState {
  Idle = "idle",
  Loading = "loading",
  Error = "error",
  Success = "success",
}

export interface AccountsDetail {
  balance: string;
  currency: string;
  deposit: boolean;
  hold: string;
  id: string;
  imgURL: string;
  name: string;
  payout: boolean;
  pending_balance: string;
  type: string;
}

export interface walletsDetail {
  currency: string;
  imgURL: string;
  name: string;
  type: string;
}

export interface WalletModalProps {
  isOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  updateAccounts: (data: AccountsDetail) => void;
}

export interface WalletCardProps {
  cardData: AccountsDetail;
}

export interface ErrorStateProps {
  refetch: Dispatch<SetStateAction<object>>;
}
