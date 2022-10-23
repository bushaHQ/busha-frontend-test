import { useReducer } from 'react'
import AccountReducer from './AccountReducer'
import AccountContext from './accountContext'
import { IAccount, SET_ACCOUNTS, LOADING_ACCOUNTS } from './types'

const AcccountState = (props: any) => {
  const initialState: IAccount = {
    accounts: [],
    fetchAccountsLoading: false,
    fetchAccountsError: '',
    fetchAccountsErrorFlag: false,
  }

  const [state, dispatch] = useReducer(AccountReducer, initialState)

  const fetchAccounts = () => {
    dispatch({
      type: LOADING_ACCOUNTS,
      payload: true,
    })
    fetch(`${process.env.REACT_APP_BASE_URL}/accounts`)
      .then((response) => response.json())
      .then((json) => {
        console.log('res', json)
        dispatch({
          type: SET_ACCOUNTS,
          payload: json,
        })
      })
      .catch((err) => console.log('erroror ', err))
  }

  const setError = async () => {
    try {
      // const res = await Axios.get('http://localhost:5000/api/auth')
      dispatch({
        type: 'CLEAR_ERRORS',
        payload: 'Netwrok Errror',
      })
    } catch (err) {}
  }

  return (
    <AccountContext.Provider
      value={{
        accounts: state.accounts,
        fetchAccountsLoading: state.fetchAccountsLoading,
        fetchAccountsError: state.fetchAccountsError,
        fetchAccountsErrorFlag: state.fetchAccountsErrorFlag,
        setError,
        fetchAccounts,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  )
}

export default AcccountState
