import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
        <ul className="sidebar-list">
            <li className="list-item active">Wallets</li>
            <li className="list-item">Prices</li>
            <li className="list-item">Peer2Peer</li>
            <li className="list-item">Activity</li>
            <li className="list-item">Settings</li>
        </ul>
    </div>
  )
}

export default Sidebar