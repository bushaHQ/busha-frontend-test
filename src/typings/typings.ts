export interface IAccount {
  id: string;
  currency: string;
  hold: number;
  pending_balance: number;
  balance: string;
  name: string;
  type: string;
  deposit: boolean;
  payout: boolean;
  imgURL: string;
}

export interface IWallet {
  currency: string;
  name: string;
  type: string;
  imgURL: string;
  balance?: string;
}

export enum METHOD {
  GET = "GET",
  POST = "POST",
}

export type NetworkRequestProp = {
  path: string;
  shouldLoad?: boolean;
  method: METHOD;
  headers?: HeadersInit;
  dataObj?: BodyInit;
};
