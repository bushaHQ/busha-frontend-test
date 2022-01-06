import "@testing-library/react";
import { render, screen } from "@testing-library/react";
import App from "./App";
// import Account from "./pages/Account";

// render(<Account />);
render(<App />);

test("renders account", async () => {
  //   expect("Wallets").toBeInTheDocument();
  expect(screen.getByText("Wallets")).toBeInTheDocument();
});
