export type Wallet = {
  currency: string;
  name: string;
  type: string;
  imgURL: string;
};

export interface Account extends Wallet {
  id: string;
  hold: string;
  pending_balance: string;
  balance: string;
  deposit: boolean;
  payout: boolean;
}

export type AccountArray = Array<Account>;

export type SidebarComponent = () => JSX.Element;
