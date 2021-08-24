import { rest } from "msw";
import accounts from "../../../db/accounts";
import wallets from "../../../db/wallets";

const BASE_URL = "http://localhost:3090";

export const handlers = [
  rest.get(`${BASE_URL}/accounts`, (req, res, ctx) => {
    return res(ctx.json(accounts));
  }),
  rest.post(`${BASE_URL}/accounts`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: "5ad2ee10-5ca6-4576-96fe-1ef642057681",
        currency: "XLM",
        hold: "0",
        pending_balance: "0",
        balance: "0",
        name: "Stellar",
        type: "digital",
        deposit: true,
        payout: true,
      })
    );
  }),

  rest.get(`${BASE_URL}/wallets`, (req, res, ctx) => {
    return res(ctx.json(wallets));
  }),
];

export const failedAccountsRequest = rest.get(
  `${BASE_URL}/accounts`,
  (req, res, ctx) => {
    return res(ctx.status(500));
  }
);
export const failedPostAccountRequest = rest.post(
  `${BASE_URL}/accounts`,
  (req, res, ctx) => {
    return res(ctx.status(500));
  }
);

export const failedWalletsRequest = rest.get(
  `${BASE_URL}/wallets`,
  (req, res, ctx) => {
    return res(ctx.status(500));
  }
);
