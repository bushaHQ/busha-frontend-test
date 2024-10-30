import styled from "styled-components";
import DashboardLayout from "./components/layouts/DashboardLayout";
import { Error } from "./components/shared/Error";
import CryptoCard from "./components/cards/CryptoCard";
import Loader from "./components/shared/Loader";
import AddWallet from "./components/custom-modals/AddWallet";
const Wrapper = styled.div`
  .homepage-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
  }

  .crypto-wallets {
    display: flex;
    align-items: center;
    gap: 35px;
    margin-top: 15px;
    border-top: 1px solid #d3d5d880;
    padding: 25px 6px 0 10px;
    flex-wrap: wrap;

    .crypto-wallets-item {
      width: calc((100% / 3) - (70px / 3));
    }
  }
`;
function App() {
  const onRetry = () => {};

  const renderLoader = (
    <div className="center-on-page">
      <Loader size={84} width={8} />
    </div>
  );

  const renderError = (
    <div className="center-on-page">
      <Error message="Network Error" onRetry={onRetry} />
    </div>
  );

  const onClose = () => {};

  const onCreateWallet = () => {};

  return (
    <>
      <Wrapper>
        <DashboardLayout>
          <div className="homepage-heading">
            <h1>Wallets</h1>
            <button>+ Add new wallet</button>
          </div>

          <div className="crypto-wallets">
            {[1, 2, 3, 4].map((item) => (
              <div className="crypto-wallets-item">
                <CryptoCard />
              </div>
            ))}
          </div>
        </DashboardLayout>
      </Wrapper>

      <AddWallet isOpen onClose={onClose} onCreateWallet={onCreateWallet} />
    </>
  );
}

export default App;
