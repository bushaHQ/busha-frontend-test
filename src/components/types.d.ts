export interface Item {
    id?: string;
    currency?: string;
    hold?: string;
    pending_balance?: string;
    balance?: string;
    name?: string;
    type?: string;
    deposit?: boolean;
    payout?: boolean;
    imgURL?: string;
  }

  export interface Wallets {
    currency: string;
    name: string;
    type: string;
    imgURL: string;
  }