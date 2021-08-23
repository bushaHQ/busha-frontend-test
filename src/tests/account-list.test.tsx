import {
  renderRoot,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "./utils";

import accounts from "../../db/accounts";

test("renders loading spinner while GET '/accounts' is in progress", async () => {
  renderRoot();
  await waitFor(() => screen.getByLabelText("Loading..."));
});

test("renders accounts when GET '/accounts' succeeds with records", async () => {
  renderRoot();

  await waitForElementToBeRemoved(() => screen.getByLabelText("Loading..."));

  accounts.forEach((account) => {
    const accountName = screen.getByText(RegExp(account.name, "i"));
    const accountBalance = screen.getByText(RegExp(account.balance, "i"));

    expect(accountName).toBeInTheDocument();
    expect(accountBalance).toBeInTheDocument();
  });
});
