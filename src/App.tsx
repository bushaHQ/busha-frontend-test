import React, { useState, useEffect, useRef } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { Accounts } from "./components/Accounts/Accounts";
import styled from "styled-components";
import ResponsiveSidebar from "./components/ResponsiveSidebar";
import Toast from "./components/shared/Toast/Toast";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainSection = styled.div`
  padding: 14px 160px;
  display: flex;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 14px 50px;
  }

  @media (max-width: 768px) {
    padding: 14px 10px;
  }
`;

const HideOnSmallScreens = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    }
  
    if (isSidebarOpen) {
      document.addEventListener("click", handleClickOutside);
    }
  
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
  };

  return ( 
    <AppContainer>
      <Nav toggleSidebar={toggleSidebar} />
      {isSidebarOpen && (
        <div ref={sidebarRef}>
          <ResponsiveSidebar isOpen={isSidebarOpen} />
        </div>
      )}
      <MainSection>
        <HideOnSmallScreens>
          <Sidebar />
        </HideOnSmallScreens>
        <Accounts showToast={showToast} />
      </MainSection>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </AppContainer>
  );
}

export default App;
