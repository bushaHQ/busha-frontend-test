import { IAccount } from './types'
import { LOADING_ACCOUNTS, SET_ACCOUNTS } from './types'

const AccountReducer = (
  state: IAccount,
  action: { type: string; payload: any },
) => {
  switch (action.type) {
    case LOADING_ACCOUNTS:
      return {
        ...state,
        fetchAccountsLoading: action.payload,
      }
    case SET_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload,
        fetchAccountsLoading: false,
        fetchAccountsError: '',
        fetchAccountsErrorFlag: false,
      }
    default:
      return state
  }
}

export default AccountReducer
