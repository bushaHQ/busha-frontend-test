import React from 'react'
import "../styles/main.css";

function Sidebar() {
  return (
    <div className='container'>

        <ul>
            <li className='wall'><a href='/'>Wallets</a></li>
            <li className='wish'><a href='/'>Prices</a></li>
            <li className='wish'> <a href='/'>Peer2Peer</a></li>
            <li className='wish'><a href=''>Activity</a></li>
            <li className='wish'><a href='/'>Settings</a></li>
        </ul>

        <h2 className='top'>Wallets</h2>
        <div className='shift'>
            <img className='net' src='network2.PNG' />
            <h5 className='error'>Network error</h5>
            <button className='try'>Try Again</button>
        </div>
    </div>
    
  )
}

export default Sidebar;