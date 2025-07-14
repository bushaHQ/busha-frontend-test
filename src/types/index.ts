export let PromiseFunction:  Promise<void>;

export enum Type { fiat = "fiat", digital = "digital" }
export interface AccountType {
    id: string
    currency: string
    hold: number
    pending_balance: number
    balance: number
    name: string
    type: Type
    deposit: boolean
    payout: boolean
    imgURL?: string
}

export interface WalletType {
    currency: string
    name: string
    type: Type
    imgURL?: string
}

export interface WalletSaveType { currency: string }
