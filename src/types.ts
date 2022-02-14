export type IAccountType = {
  id: string;
  currency: string;
  hold: string;
  pending_balance: string;
  balance: string;
  name: string;
  type: string;
  deposit: true;
  payout: true;
  imgURL: string;
};

export type IWalletType = {
  currency: string;
  name: string;
  type: string;
  imgURL: string;
};
