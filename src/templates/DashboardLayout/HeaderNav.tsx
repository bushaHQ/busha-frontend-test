import React from "react";
import BushaLogo from "../../components/atoms/vectors/BushaLogo";
import { Navbar } from "./StyledDashboard";

const HeaderNav = () => {
  return (
    <Navbar>
      <BushaLogo />

      <div className="profile-holder">
        <span className="avatar">O</span>
        <span>Oluwatobi Akindunjoye</span>
      </div>
    </Navbar>
  );
};

export default HeaderNav;
