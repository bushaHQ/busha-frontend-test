export interface AccountData {
  id: string
  currency: string
  hold: string
  pending_balance: string
  balance: string
  name: string
  type: string
  deposit: boolean
  payout: boolean
  imgURL: string
}

export interface IAccount {
  accounts: AccountData[]
  fetchAccountsLoading: boolean
  fetchAccountsError: string
  fetchAccountsErrorFlag: boolean
  setError?: () => void
  fetchAccounts?: () => void
}

export const LOADING_ACCOUNTS = 'LOADING_ACCOUNTS'
export const SET_ACCOUNTS = 'SET_ACCOUNTS'
