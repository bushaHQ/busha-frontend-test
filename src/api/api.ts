import axios from 'axios';
import { API_URL, TEST_MODE, TEST_URL } from './env';

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
    const BASE_URL = TEST_MODE ? TEST_URL : API_URL;
    const resp = await axios.get(`${BASE_URL}/wallets`)
    return resp.data
}

/* get list of all accounts */
export async function fetchAccounts() : Promise<IAccount[]> {
    const BASE_URL = TEST_MODE ? TEST_URL : API_URL;
    const resp = await axios.get(`${BASE_URL}/accounts`)
    return resp.data
}

/* add a wallet to accounts */
export async function addAccount(currency: string) : Promise<IAccount> {
    const BASE_URL = TEST_MODE ? TEST_URL : API_URL;
    const resp = await axios.post(`${BASE_URL}/accounts`, { "currency": currency })
    return resp.data
}
