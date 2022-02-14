import React from 'react'
import Navbar from '../navbar';

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div>
      <Navbar />
      <div className='sidebar'>
        <div className='sidebar__menu'>
          <a href='/' className='active'>Wallets</a>
          <a href='/' className='menu-links'>Prices</a>
          <a href='/' className='menu-links'>Peer2Peer</a>
          <a href='/' className='menu-links'>Activity</a>
          <a href='/' className='menu-links'>Settings</a>
        </div>
      </div>
    </div>

  )
}

export default Sidebar;