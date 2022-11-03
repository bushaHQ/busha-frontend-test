import { Dispatch, SetStateAction } from "react";
import { AllActions } from "../types";
export const getAccount = (dispatch: Dispatch<AllActions>): void => {
  dispatch({ type: "LOADING_ACCOUNTS", status: "pending" });
  fetch("http://localhost:3090/accounts")
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      throw new Error("Something went wrong");
    })
    .then((resp) => {
      dispatch({
        type: "GET_ACCOUNT",
        payload: resp,
      });
      dispatch({ type: "LOADING_ACCOUNTS", status: "resolved" });
    })
    .catch((err) => {
      dispatch({ type: "LOADING_ACCOUNTS", status: "rejected" });
    });
};

export const getWallet = (dispatch: Dispatch<AllActions>) => {
  dispatch({ type: "LOADING_WALLETS", status: "pending" });
  fetch("http://localhost:3090/wallets")
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      throw new Error("Something went wrong");
    })
    .then((resp) => {
      dispatch({
        type: "GET_WALLET",
        payload: resp,
      });
      dispatch({ type: "LOADING_WALLETS", status: "resolved" });
    })
    .catch((err) => {
      dispatch({ type: "LOADING_WALLETS", status: "rejected" });
    });
};

export const addAccount = (
  dispatch: Dispatch<AllActions>,
  closeModalHandler: Dispatch<SetStateAction<boolean>>,
  showNetworkErrorHandler: Dispatch<SetStateAction<boolean>>,
  data: Record<string, string>
) => {
  dispatch({ type: "LOADING_ADD_ACCOUNT", status: "pending" });
  fetch("http://localhost:3090/accounts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => {
      if (resp.ok) {
        dispatch({ type: "LOADING_ADD_ACCOUNT", status: "resolved" });
        closeModalHandler(false);
        resp.json();
        getAccount(dispatch);
      }
      throw new Error("Something went wrong");
    })
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => {
      showNetworkErrorHandler(false);
      dispatch({ type: "LOADING_ADD_ACCOUNT", status: "rejected" });
    });
};
