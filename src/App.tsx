import styled from "styled-components";

import Navbar from "./components/shared/Navbar";
import Sidebar from "./components/shared/Sidebar";
import WalletsPage from "./components/pages/Wallets";

export default function App() {
  const user = {
    firstName: 'Oluwatobi',
    lastName: 'Akindunjoye'
  }

  return (
    <>
      <Navbar user={user} />
      <MainCotainer>
        <MainCotent>
          <Sidebar />
          <WalletsPage />
        </MainCotent>
      </MainCotainer>
    </>);
}

const MainCotainer = styled.main`
    padding 40px 16px 16px;
    display: flex;
    justify-content: center
`

const MainCotent = styled.div`
    width: 100%;
    display: flex;
    gap: 60px;

    @media (min-width: 1300px) {
        width: 1300px;
    }
`

