export interface IAccount {
    balance: string,
    currency: string,
    deposit: boolean
    hold: string
    id: string
    imgURL: string
    name: string
    payout: boolean
    pending_balance: string
    type: string
  }

  export interface IWallet {
    currency: string,
    imgURL: string
    name: string
    type: string
  }
