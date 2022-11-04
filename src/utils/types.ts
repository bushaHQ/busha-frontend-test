export type AccountsType = {
  id: string;
  currency: string;
  hold: string;
  pending_balance: number;
  balance: string;
  name: string;
  type: string;
  deposit: boolean;
  payout: boolean;
  imgURL: string;
};

export type WalletType = {
  currency: string;
  name: string;
  type: string;
  imgURL: string;
};
