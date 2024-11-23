import React from "react";
import bushaL from "../../assets/busha_logo.png";
import { useDashboardContext } from "./DashboardProvider";
import Modal from "./Modal";
import SideBar from "./SideBar";
function Header() {
  const { isSidebarOpen, setSidebarOpen } = useDashboardContext();
  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="nav-logo">
              <img src={bushaL} alt="logo" style={{ height: "1em" }} />
            </div>

            <div className="right">
              <div className="items">
                <p className="hidden md:block">
                  <span className="avatar"> O </span>
                </p>
                <span className="hidden md:block">Oluwatobi Akindunjoye</span>
                <a
                  href="#"
                  className="block md:hidden"
                  onClick={(e) => {
                    e.preventDefault();
                    setSidebarOpen(!isSidebarOpen);
                  }}
                >
                  <span className="fa text-md"> ☰</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {isSidebarOpen && (
        <Modal isOpen={isSidebarOpen}>
          <div className="p-6">
            <div className="flex justify-between">
              <div></div>
              <div onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-md cursor-pointer"> ✕ </div>
            </div>
            <SideBar />
          </div>
        </Modal>
      )}
    </>
  );
}
export default Header;
