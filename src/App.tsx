import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import styled from "styled-components";
import { NavMenu } from "./components/NavMenu";
import { AccountsPage } from "./pages/Accounts";
import { AccountsContextProvider } from "./context/accountContext";
import { WalletsContextProvider } from "./context/walletContext";

const AppContainer = styled.div`
  height: 100vh;
`;

const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const MainContentWrapper = styled.main`
    padding-left: 160px;
    padding-top: 60px;
    display: flex;
    z-index: 1;

    @media (max-width: 1200px) {
      padding-left: 50px;
    }

    @media (max-width: 768px) {
      padding-left: 25px;
      padding-top: 30px;
    }
`;

const NavWrapper = styled.div`
  width: 30%;
  max-width: 240px;
  min-width: 240px;

  @media (max-width: 768px) {
      display: none;
  }
`;

const MainContent = styled.div`
  width: 70%;
  padding-right: 160px;

   @media (max-width: 1200px) {
      padding-right: 50px;
    }

    @media (max-width: 768px) {
      padding-right: 25px;
      width: 100%;
    }
`;

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)


  return (
    <AccountsContextProvider>
      <WalletsContextProvider>
        <AppContainer>
            <Header
              openSidebar={() => setIsSidebarOpen(true)}
            />

            <MainWrapper>
              {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}

                <MainContentWrapper>
                  <NavWrapper>
                    <NavMenu />
                  </NavWrapper>

                  <MainContent>
                    <AccountsPage />
                  </MainContent>
                </MainContentWrapper>
                
          </MainWrapper>
        </AppContainer>
      </WalletsContextProvider>
    </AccountsContextProvider>
  )
}

export default App;
