import React, { useState } from 'react';
import Modal from '../shared/Modal';
import AddWalletForm from '../add-wallet/AddWallet';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeItem, setActiveItem] = useState('Wallets');
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const navItems = ['Wallets', 'Prices', 'Peer2Peer', 'Activity', 'Settings'];

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="top-navbar">
        <div className="top-navbar-content">
          <div className="logo-section">
            <button className="hamburger-menu" onClick={toggleSidebar}>
              &#9776;
            </button>
            <img src="busha-logo-green.svg" alt="Busha Logo" />
          </div>
          <div className="user-profile">
            <div className="avatar">
              <span>O</span>
            </div>
            <span className="user-name">Oluwatobi Akindunjoye</span>
          </div>
        </div>
      </div>
      <div className="layout">
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="nav-items">
            {navItems.map((item) => (
              <button
                key={item}
                className={`nav-item ${activeItem === item ? 'active' : ''}`}
                onClick={() => {
                  setActiveItem(item);
                  setSidebarOpen(false);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="main-content">
          <div className="main-content-header">
            <h1 className="main-content-title">{activeItem}</h1>
            {activeItem === 'Wallets' && (
              <button className="add-wallet-button" onClick={() => setModalOpen(true)}>
                <span className="add-wallet-icon">+</span>
                <span className="add-wallet-text">Add new wallet</span>
              </button>
            )}
          </div>
          <div className="title-divider"></div>
          <div className="main-content-body">
            {activeItem === 'Wallets' ? children : null}
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen}>
        <AddWalletForm onClose={() => setModalOpen(false)} />
      </Modal>
    </>
  );
};

export default Layout;
