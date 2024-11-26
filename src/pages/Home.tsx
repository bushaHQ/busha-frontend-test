import Layout from "../components/other/Layout";
import { AccountProvider } from "../context/AccountContext";
import Wallet from "../screens";


function Home() {
  return (
    <Layout>
      <AccountProvider>
        <Wallet />
      </AccountProvider>

    </Layout>
  );
}

export default Home;
