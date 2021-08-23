import { rest } from "msw";
import accounts from "../../../db/accounts";

export const handlers = [
  rest.get("/accounts", (req, res, ctx) => {
    return res(ctx.json(accounts));
  }),
];
