import userEvent from "@testing-library/user-event";
import {
  renderRoot,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from "./utils";

test("clicking 'Add new wallet' button opens the modal", async () => {
  renderRoot();

  await waitForElementToBeRemoved(() => screen.getByLabelText("Loading..."));

  expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
  // open modal
  userEvent.click(screen.getByText(/Add new wallet/i));
  await waitFor(() => screen.getByTestId("modal"));
});

test.only("'Add new wallet' form", async () => {
  renderRoot();

  await waitForElementToBeRemoved(() => screen.getByLabelText("Loading..."));

  userEvent.click(screen.getByText(/Add new wallet/i));

  const withinModal = within(screen.getByTestId("modal"));

  // fetch available wallets
  await waitForElementToBeRemoved(() =>
    withinModal.getByLabelText("Loading...")
  );

  expect(withinModal.getByText(/Add new wallet/i)).toBeInTheDocument();
  expect(withinModal.getByText(/Create wallet/i)).toBeInTheDocument();

  const walletSelect = screen.getByRole("combobox");
  expect(walletSelect).toBeInTheDocument();
});

test("can submit wallet form successfully POST'/accounts'", async () => {
  renderRoot();

  await waitForElementToBeRemoved(() => screen.getByLabelText("Loading..."));

  userEvent.click(screen.getByText(/Add new wallet/i));

  const withinModal = within(screen.getByTestId("modal"));

  // fetch available wallets
  await waitForElementToBeRemoved(() =>
    withinModal.getByLabelText("Loading...")
  );

  const submitButton = withinModal.getByText(/Create wallet/i);

  const walletSelect = screen.getByRole("combobox");

  userEvent.selectOptions(walletSelect, "XLM");

  userEvent.click(submitButton);

  expect(within(submitButton).getByLabelText("Loading...")).toBeInTheDocument();

  // close modal when request is successful
  expect(screen.getByTestId("modal")).not.toBeInTheDocument();

  const accountName = screen.getByText(/Stellar/i);
  const accountBalance = screen.getByText("0");
  const accountCurrency = screen.getByText("XML");

  expect(accountName).toBeInTheDocument();
  expect(accountBalance).toBeInTheDocument();
  expect(accountCurrency).toBeInTheDocument();
});
