import { AddWallletPayload } from "types/wallet";
import { Http } from "utils/http";

export const walletServices = {
  getAccounts: () => Http("/accounts"),
  addAccount: (payload: AddWallletPayload) =>
    Http("/accounts", {
      method: "POST",
      body: payload,
    }),
  getWallets: () => Http("/wallets"),
};
