import React, { useState, useEffect } from 'react';
import Modal from "./components/shared/Modal";
import styled from 'styled-components';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import AccountList from './components/Account-list';
import AddAccount from './components/Add-wallet';
import Notification from './components/shared/Notifications';

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/theme/theme';
import { useTheme } from './components/theme/themeContext';

const WrapperCover = styled.div`
  background-color: ${(props) => props.theme.background};
height: 100vh;
`;

const MainWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 1rem;
  background-color: ${(props) => props.theme.background};
`;

const NavbarWrapper = styled.div`
  background-color: ${(props) => props.theme.navbar};
  color: ${(props) => props.theme.text};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box; 
  text-align: center;
  font-size: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.navbarBottomBorder};
  position: sticky;
  top: 0;
  z-index: 3;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background};
  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;

// Sidebar styling
const SidebarWrapper = styled.div`
  box-sizing: border-box;
  width: 22%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Account List styling
const AccountListWrapper = styled.div`
  width: 75%; 
  padding: 1rem 0 0 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin-bottom: 20px;
  }
`;

// Theme Switch styling
const ThemeSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 3px;
  right: 0;
  max-width: 1200px;
  transition: transform 0.3s ease;
`;

const SwitchIcon = styled.span<{ isLightTheme: boolean }>`
  font-size: 2rem;
  margin-right: 1rem;
  transition: opacity 0.3s ease;
  opacity: ${(props) => (props.isLightTheme ? 1 : 0.4)};
  display: ${(props) => (props.isLightTheme ? 'block' : 'none')};
  color: ${(props) => props.theme.text};
`;

interface walletInterface {
  name: string;
  currency: string;
}

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [walletData, setWalletData] = useState<walletInterface>();
  const [showNotification, setShowNotification] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleAddAccountClick = () => {
    setIsModalOpen(true);
  };

  useEffect(()=>{
    if(walletData?.name) {
      setShowNotification(true); 
    }
  },[walletData?.name]);

  return (
    <>
      <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <NavbarWrapper>
          <NavBar />
        </NavbarWrapper>
        <WrapperCover>
          <MainWrapper>
            <ContentWrapper>
              <SidebarWrapper>
                <SideBar />
              </SidebarWrapper>

              <AccountListWrapper>
                <AccountList onAddAccountClick={handleAddAccountClick} walletData={walletData} />
                <Modal isOpen={isModalOpen}>
                  <AddAccount onClose={() => setIsModalOpen(false)} addWallet={setWalletData} />
                </Modal>
              </AccountListWrapper>

              {showNotification && (
                <Notification
                  message={`${walletData?.name} Wallet added successfully!`}
                  onClose={() => setShowNotification(false)}
                />
              )}
            </ContentWrapper>

            <ThemeSwitchWrapper onClick={toggleTheme}>
              <SwitchIcon isLightTheme={theme === 'light'} className="material-symbols-outlined">
                toggle_on
              </SwitchIcon>
              <SwitchIcon isLightTheme={theme === 'dark'} className="material-symbols-outlined">
                toggle_off
              </SwitchIcon>
            </ThemeSwitchWrapper>

          </MainWrapper>
        </WrapperCover>
      </StyledThemeProvider>
    </>
  );
};

export default App;
