import { renderRoot, screen, render, within } from "./utils";

test("renders user's full name", () => {
  renderRoot();
  const userNameElement = screen.getByText(/Oluwatobi Akindunjoye/i);
  expect(userNameElement).toBeInTheDocument();
});

test("renders sidebar links", () => {
  renderRoot();
  const sidebsrLinks = [
    "Wallets",
    "Prices",
    "Peer2Peer",
    "Activity",
    "Settings",
  ];

  sidebsrLinks.forEach((link) => {
    const linkElement = screen.getByText(RegExp(link, "i"));
    expect(linkElement).toBeInTheDocument();
  });
});

test.skip("smoke test within shit", () => {
  render(
    <div data-testid="logo">
      <img src="logo.svg" alt="logo" /> <h2>Logo</h2>
    </div>
  );

  const logoContainer = screen.getByTestId(/Logo/i);
  const logoImg = within(logoContainer).getByRole("img");
  expect(logoImg).toBeInTheDocument();
  expect(logoImg).toHaveAttribute("src", "logo.svg");
});
