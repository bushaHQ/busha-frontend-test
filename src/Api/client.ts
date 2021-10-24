import { Fetch } from "../lib/fetch";
import { IAccount, IWallet } from "./types";

export class ApiClient {
	private _instance: Fetch = new Fetch('http://localhost:3090', {
		errorHandler: (err) => err.statusText
	});

	public getWalletAccounts = async () => this._instance.get<IAccount[]>('/accounts')

	public createWallet = async (b: { currency: string }) => this._instance.post<{ currency: string }, IAccount>('/accounts', b)

	public getWalletCurrencies = async () => this._instance.get<IWallet[]>('/wallets')

}
