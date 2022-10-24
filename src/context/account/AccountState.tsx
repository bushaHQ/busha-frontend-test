import { useReducer } from 'react'
import AccountReducer from './AccountReducer'
import AccountContext from './accountContext'
import {
  IAccount,
  SET_ACCOUNTS,
  LOADING_ACCOUNTS,
  SET_ACCOUNT_ERROR,
  SET_WALLETS,
  SET_WALLET_ERROR,
  CREATING_ACCOUNT,
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_ERROR,
  LOADING_WALLETS,
  CLEAR_ACCOUNT_ERROR,
} from './types'

const AcccountState = (props: any) => {
  const initialState: IAccount = {
    accounts: [],
    fetchAccountsLoading: false,
    fetchAccountsError: '',
    fetchAccountsErrorFlag: false,
    wallets: [],
    fetchWalletsLoading: false,
    fetchWalletsError: '',
    fetchWalletsErrorFlag: false,
    createAccountLoading: false,
    createAccountSuccess: false,
    createAccountError: '',
    createAccountErrorFlag: false,
  }

  const [state, dispatch] = useReducer(AccountReducer, initialState)

  const fetchAccounts = async () => {
    dispatch({
      type: LOADING_ACCOUNTS,
      payload: true,
    })
    fetch(`${process.env.REACT_APP_BASE_URL}/accounts`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: SET_ACCOUNTS,
          payload: json,
        })
      })
      .catch((err) =>
        dispatch({
          type: SET_ACCOUNT_ERROR,
          payload: true,
        }),
      )
  }

  const fetchWallets = async () => {
    dispatch({
      type: LOADING_WALLETS,
      payload: true,
    })
    fetch(`${process.env.REACT_APP_BASE_URL}/wallets`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: SET_WALLETS,
          payload: json,
        })
      })
      .catch((err) =>
        dispatch({
          type: SET_WALLET_ERROR,
          payload: true,
        }),
      )
  }

  const createAccount = async (currency: string) => {
    dispatch({
      type: CREATING_ACCOUNT,
      payload: true,
    })
    fetch(`${process.env.REACT_APP_BASE_URL}/accounts`, {
      method: 'POST',
      body: JSON.stringify({
        currency,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.hasOwnProperty('error')) {
          dispatch({
            type: CREATE_ACCOUNT_ERROR,
            payload: 'Network Error here',
          })
        } else {
          dispatch({
            type: CREATE_ACCOUNT,
            payload: true,
          })
          console.log('res', json)
          fetchAccounts()
        }
      })
      .catch((err) => {
        dispatch({
          type: CREATE_ACCOUNT_ERROR,
          payload: 'Network Error',
        })
      })
  }

  const clearAccountError = async () => {
    dispatch({
      type: CLEAR_ACCOUNT_ERROR,
      payload: '',
    })
  }

  return (
    <AccountContext.Provider
      value={{
        accounts: state.accounts,
        fetchAccountsLoading: state.fetchAccountsLoading,
        fetchAccountsError: state.fetchAccountsError,
        fetchAccountsErrorFlag: state.fetchAccountsErrorFlag,
        wallets: state.wallets,
        fetchWalletsLoading: state.fetchWalletsLoading,
        fetchWalletsError: state.fetchWalletsError,
        fetchWalletsErrorFlag: state.fetchWalletsErrorFlag,
        createAccountLoading: state.createAccountLoading,
        createAccountSuccess: state.createAccountSuccess,
        createAccountError: state.createAccountError,
        createAccountErrorFlag: state.createAccountErrorFlag,

        fetchAccounts,
        fetchWallets,
        createAccount,
        clearAccountError,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  )
}

export default AcccountState
