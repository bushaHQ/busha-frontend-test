import userEvent from "@testing-library/user-event";
import {
  failedPostAccountRequest,
  failedWalletsRequest,
} from "./mocks/handlers";
import { server } from "./mocks/server";
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

test("clicking the 'Close icon' button in the modal closes the modal", async () => {
  renderRoot();

  await waitForElementToBeRemoved(() => screen.getByLabelText("Loading..."));

  expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
  // open modal
  userEvent.click(screen.getByText(/Add new wallet/i));

  const modal = await screen.findByTestId("modal");
  expect(modal).toBeInTheDocument();

  const closeButton = within(modal).getByLabelText(/Close button/i);
  expect(closeButton).toBeInTheDocument();

  userEvent.click(closeButton);

  await waitFor(() =>
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument()
  );
});

test("shows 'Network error' when GET'/accounts' fails", async () => {
  server.use(failedWalletsRequest);

  renderRoot();

  await waitForElementToBeRemoved(() => screen.getByLabelText("Loading..."));

  userEvent.click(screen.getByText(/Add new wallet/i));

  const modal = await screen.findByTestId("modal");

  const withinModal = within(modal);

  // fetch available wallets
  await waitFor(() =>
    expect(withinModal.queryByLabelText("Loading...")).not.toBeInTheDocument()
  );

  const errorMessage = await withinModal.findByText(/Network error/i);
  const tryButton = await withinModal.findByText(/try again/i);

  expect(errorMessage).toBeInTheDocument();
  expect(tryButton).toBeInTheDocument();
});

test("makes request when 'Try again' button is clicked on error for GET'/accounts'", async () => {
  server.use(failedWalletsRequest);

  renderRoot();

  await waitForElementToBeRemoved(() => screen.getByLabelText("Loading..."));

  userEvent.click(screen.getByText(/Add new wallet/i));

  const modal = await screen.findByTestId("modal");

  const withinModal = within(modal);

  // fetch available wallets
  await waitFor(() =>
    expect(withinModal.queryByLabelText("Loading...")).not.toBeInTheDocument()
  );

  const tryButton = await withinModal.findByText(/try again/i);

  userEvent.click(tryButton);

  expect(await withinModal.findByLabelText("Loading...")).toBeInTheDocument();
});

test("'Add new wallet' form", async () => {
  renderRoot();

  await waitForElementToBeRemoved(() => screen.getByLabelText("Loading..."));

  userEvent.click(screen.getByText(/Add new wallet/i));

  const modal = await screen.findByTestId("modal");

  const withinModal = within(modal);

  // fetch available wallets
  await waitFor(() =>
    expect(withinModal.queryByLabelText("Loading...")).not.toBeInTheDocument()
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
  await waitFor(() =>
    expect(withinModal.queryByLabelText("Loading...")).not.toBeInTheDocument()
  );

  const submitButton = withinModal.getByText(/Create wallet/i);

  const walletSelect = screen.getByRole("combobox");

  userEvent.selectOptions(walletSelect, "XLM");

  userEvent.click(submitButton);

  expect(within(submitButton).getByLabelText("Loading...")).toBeInTheDocument();

  // close modal when request is successful
  await waitFor(() =>
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument()
  );

  const accountName = await screen.findByText(/Stellar/i);
  const accountBalance = await screen.findByText("0");
  const accountCurrency = await screen.findByText("XLM");

  expect(accountName).toBeInTheDocument();
  expect(accountBalance).toBeInTheDocument();
  expect(accountCurrency).toBeInTheDocument();
});

test("shows error when POST'/accounts' fails", async () => {
  server.use(failedPostAccountRequest);

  renderRoot();

  await waitForElementToBeRemoved(() => screen.getByLabelText("Loading..."));

  userEvent.click(screen.getByText(/Add new wallet/i));

  const withinModal = within(screen.getByTestId("modal"));

  // fetch available wallets
  await waitFor(() =>
    expect(withinModal.queryByLabelText("Loading...")).not.toBeInTheDocument()
  );

  const submitButton = withinModal.getByText(/Create wallet/i);

  const walletSelect = screen.getByRole("combobox");

  userEvent.selectOptions(walletSelect, "XLM");

  userEvent.click(submitButton);

  expect(within(submitButton).getByLabelText("Loading...")).toBeInTheDocument();

  const errorMessage = await withinModal.findByText(/Network error/i);

  expect(errorMessage).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
