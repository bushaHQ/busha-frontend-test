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
  fetchAccounts?: () => void
  wallets: any[]
  fetchWalletsLoading: boolean
  fetchWalletsError: string
  fetchWalletsErrorFlag: boolean
  fetchWallets?: () => void
  createAccountLoading: boolean
  createAccountSuccess: boolean
  createAccountError: string
  createAccountErrorFlag: boolean
  createAccount?: (currency: string) => void
  clearAccountError?: () => void
}

export const LOADING_ACCOUNTS = 'LOADING_ACCOUNTS'
export const SET_ACCOUNTS = 'SET_ACCOUNTS'
export const SET_ACCOUNT_ERROR = 'SET_ACCOUNT_ERROR'

export const LOADING_WALLETS = 'LOADING_WALLETS'
export const SET_WALLETS = 'SET_WALLETS'
export const SET_WALLET_ERROR = 'SET_WALLET_ERROR'

export const CREATING_ACCOUNT = 'CREATING_ACCOUNT'
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT'
export const CREATE_ACCOUNT_ERROR = 'CREATE_ACCOUNT_ERROR'
export const CLEAR_ACCOUNT_ERROR = 'CLEAR_ACCOUNT_ERROR'
