interface AccountData {
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
  test: string
  accountError: string
  setError?: () => void
  fetchAccounts?: () => void
}
