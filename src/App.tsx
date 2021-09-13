import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PageTransition } from "./AppStyles";

import { WalletPage } from "./pages/accountList";

export const AppContext = createContext({
  modalOpen: false,
  walletList: [] as Array<Wallet>,
  accountsList: [] as Array<Account>,
  handleSetWalletList: (_: Array<Wallet>) => {},
  handleSetAccountsList: (_: Array<Account>) => {},
  handleAddAccount: (_: Account) => {},
  handleOpen: () => {},
  handleClose: () => {},
});

interface Wallet {
  currency: string;
  name: string;
  type: string;
  imgURL: string;
}

interface Account {
  currency: string;
  name: string;
  type: string;
  imgURL: string;
  balance: string;
  hold: string;
  id: string;
  pending_balance: string;
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [walletList, setWalletList] = useState<Wallet[]>([]);
  const [accountsList, setAccountsList] = useState<Account[]>([]);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleSetWalletList = (listOfWallets: Array<Wallet>) => {
    setWalletList(listOfWallets);
  };

  const handleAddAccount = (wallet: Account) => {
    setAccountsList([...accountsList, wallet]);
  };

  const handleSetAccountsList = (listOfAccounts: Array<Account>) => {
    setAccountsList(listOfAccounts);
  };

  return (
    <AppContext.Provider
      value={{
        modalOpen,
        walletList,
        accountsList,
        handleOpen,
        handleClose,
        handleSetWalletList,
        handleSetAccountsList,
        handleAddAccount,
      }}
    >
      <PageTransition>
        <Router>
          <Switch>
            <Route exact path="*" component={WalletPage} />
          </Switch>
        </Router>
      </PageTransition>
    </AppContext.Provider>
  );
}

export default App;
