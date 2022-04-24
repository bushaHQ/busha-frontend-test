import { SelectItemType } from "../components/molecules/Select/Index";
import { AccountItems, AccountResponse, WalletResponse } from "./types";

export const transformWalletOptions = (data: WalletResponse[]): SelectItemType[] => (
    data.map<SelectItemType>((item) => ({
        label: item.name, 
        value: item.currency
    }))
);

export const transformAccounts = (data: AccountResponse[]): AccountItems[] => (
    data.map<AccountItems>((items) => ({
        ...items,
        currencyCode: items.currency,
        pendingBalance: items.pending_balance,
    }))
);