import React from 'react';
const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar-brand">
            <img className="navbar-logo" src="/Busha-Logo.svg" alt="Busha"/>
        </div>
        <div className="navbar-user">
          <div className="user-image-div">
            <p className="user-image">O</p>
          </div>
          <p className="user-name">Oluwatobi Akindunjoye</p>
        </div>
    </div>
  )
}

export default Navbar