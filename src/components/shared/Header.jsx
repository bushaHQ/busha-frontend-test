import React from "react";
import "./Header.scss"; // Make sure the path is correct

export default function Header() {
  return (
    <header className="header">
      <div>
        <img src="Busha Logo 1.svg" alt="" />
      </div>
      <div className="user-info">
        <div className="avatar">
          <p>O</p>
        </div>
        <p>Oluwatobi Akindunjoye</p>
      </div>
    </header>
  );
}
