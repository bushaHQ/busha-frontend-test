import "./home.scss";
import HomeLayout from "../../components/HomeLayout";
import Wallet from "../../components/Wallet";

function Home(): JSX.Element {
  return (
    <HomeLayout>
      <Wallet />
    </HomeLayout>
  );
}

export default Home;
