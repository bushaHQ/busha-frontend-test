import { AllActions, StateType } from "../types";

function reducer(state: StateType, action: AllActions): StateType {
  switch (action.type) {
    case "GET_WALLET":
      return { ...state, wallets: { ...state.wallets, data: action.payload } };
    case "GET_ACCOUNT":
      return {
        ...state,
        accounts: { ...state.accounts, data: action.payload },
      };
    case "LOADING_ACCOUNTS":
      return {
        ...state,
        accounts: { ...state.accounts, status: action.status },
      };
    case "LOADING_WALLETS":
      return { ...state, wallets: { ...state.wallets, status: action.status } };
    case "LOADING_ADD_ACCOUNT":
      return { ...state, addAccount: { status: action.status } };
    default:
      throw new Error();
  }
}

export { reducer };
