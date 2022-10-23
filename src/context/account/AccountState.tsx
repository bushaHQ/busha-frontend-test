import { useReducer } from 'react'
import AccountReducer from './AccountReducer'
import AccountContext from './accountContext'
import { IAccount } from './types'

const AcccountState = (props: any) => {
  const initialState: IAccount = {
    accounts: [],
    test: 'Mona Lisa',
    accountError: '',
  }

  const [state, dispatch] = useReducer(AccountReducer, initialState)

  const fetchAccounts = () => {
    console.log('calling api')
    fetch(`${process.env.REACT_APP_BASE_URL}/accounts`)
      .then((res) => console.log('res.json()', res))
      .then((err) => console.log('erroror ', err))
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
        test: state.test,
        accountError: state.accountError,
        setError,
        fetchAccounts,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  )
}

export default AcccountState
