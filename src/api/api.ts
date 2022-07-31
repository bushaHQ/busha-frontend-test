import axios from 'axios';

export interface IAccount {
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
}

export interface IWallet {
    currency: string;
    name: string;
    type: string;
    imgURL: string;
}

/* get list of all wallets */
export async function fetchWallets() : Promise<IWallet[]> {
    const resp = await axios.get("http://localhost:3090/wallets")
    return resp.data
}

/* get list of all accounts */
export async function fetchAccounts() : Promise<IAccount[]> {
    const resp = await axios.get("http://localhost:3090/accounts")
    return resp.data
}

/* add a wallet to accounts */
export async function addAccount(currency: string) : Promise<IAccount> {
    const resp = await axios.post("http://localhost:3090/accounts", { "currency": currency })
    return resp.data
}
