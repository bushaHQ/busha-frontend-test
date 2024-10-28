import React from "react";
import { Logo } from "../assets";
import Avatar from "./Avatar";

const Navbar = () => {
  const fullName = "Oluwatobi Akindunjoye";

  return (
    <header className="header">
      <nav className="nav">
        <img src={Logo} alt="" />

        <div className="auth-user">
          <Avatar name={fullName} />
          <h6 className="full-name">{fullName}</h6>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
