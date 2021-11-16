import Layout from "./components/layout";
import { Wallet } from "./pages/wallet";

function App() {
  return (
    <Layout
      Component={Wallet}
    />
  );
}

export default App;