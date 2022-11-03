import React, { Dispatch, useReducer } from "react";

import { reducer } from "./reducer";

import { AllActions, StateType } from "./types";

const initialState = {
  wallets: {
    status: "idle",
    data: [
      {
        currency: "",
        name: "",
        type: "",
        imgURL: "",
      },
    ],
  },
  accounts: {
    data: [
      {
        id: "",
        currency: "",
        hold: "",
        pendingBalance: "",
        balance: "",
        name: "",
        type: "",
        imgURL: "",
      },
    ],
    status: "pending",
  },
  addAccount: { status: "idle" },
};

const AppContext = React.createContext<{
  state: StateType;
  dispatch: Dispatch<AllActions>;
}>({
  state: initialState,
  dispatch: () => {},
});

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
