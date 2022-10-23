import { IAccount } from './types'

const AccountReducer = (
  state: IAccount,
  action: { type: string; payload: string | {} | [] },
) => {
  switch (action.type) {
    case 'CLEAR_ERRORS':
      return {
        ...state,
        error: null,
        errFlag: false,
      }
    default:
      return state
  }
}

export default AccountReducer
