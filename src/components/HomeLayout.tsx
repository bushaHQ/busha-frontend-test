/* eslint-disable */
import Logo from "../assets/logo.svg";
import Profile from "../assets/profile.svg";
import { HomeLayoutProps } from "../types";

function HomeLayout({ children }: HomeLayoutProps): JSX.Element {
  return (
    <div className="layout">
      {/* navbar */}
      <div className="navbar">
        <div className="navbar__body">
          <img src={Logo} alt="logo" />
          <div className="profile">
            <img src={Profile} alt="profile" />
            <p>Oluwatobi Akindunjoye</p>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="body">
        <div className="left">
          <a href="" className="active">
            <p>Wallets</p>
          </a>
          <a href="">
            <p>Prices</p>
          </a>
          <a href="">
            <p>Peer2Peer</p>
          </a>
          <a href="">
            <p>Activity</p>
          </a>
          <a href="">
            <p>Settings</p>
          </a>
        </div>
        
        <div className="right">{children}</div>
      </div>
    </div>
  );
}

export default HomeLayout;
