import {
  CREATING_ACCOUNT,
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_ERROR,
  IAccount,
  LOADING_WALLETS,
  SET_ACCOUNT_ERROR,
  SET_WALLETS,
  SET_WALLET_ERROR,
  CLEAR_ACCOUNT_ERROR,
} from './types'
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
        createAccountSuccess: false,
      }
    case SET_ACCOUNT_ERROR:
      return {
        ...state,
        accounts: [],
        fetchAccountsLoading: false,
        fetchAccountsErrorFlag: true,
      }
    case LOADING_WALLETS:
      return {
        ...state,
        fetchWalletsLoading: action.payload,
      }
    case SET_WALLETS:
      return {
        ...state,
        wallets: action.payload,
        fetchWalletsLoading: false,
        fetchWalletsError: '',
        fetchWalletsErrorFlag: false,
      }
    case SET_WALLET_ERROR:
      return {
        ...state,
        wallets: [],
        fetchWalletsLoading: false,
        fetchWalletsErrorFlag: true,
      }
    case CREATING_ACCOUNT:
      return {
        ...state,
        createAccountLoading: action.payload,
      }
    case CREATE_ACCOUNT:
      return {
        ...state,
        createAccountLoading: false,
        createAccountSuccess: action.payload,
        createAccountError: '',
        createAccountErrorFlag: false,
      }
    case CREATE_ACCOUNT_ERROR:
      return {
        ...state,
        createAccountLoading: false,
        createAccountSuccess: false,
        createAccountError: action.payload,
        createAccountErrorFlag: true,
      }
    case CLEAR_ACCOUNT_ERROR:
      return {
        ...state,
        createAccountError: '',
        createAccountErrorFlag: false,
      }
    default:
      return state
  }
}

export default AccountReducer
