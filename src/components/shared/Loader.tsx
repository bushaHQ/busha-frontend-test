import React from 'react'
import "../styles/main.css";

function Loader() {
  return (
    <div>
        <div className='container'>
            <ul>
                <li className='wall'> <a href=""> Wallets</a> </li>
                <li className='wish'> <a href=""> </a>Prices </li>
                <li className='wish'> <a href=""> </a> Peer2Peer</li>
                <li className='wish'> <a href=""> </a> Activity</li>
                <li className='wish'> <a href=""> </a> Settings</li>
            </ul>

            <h2 className='top'>Wallets</h2>
            <div className='shift'>
                <img className='net' src="load.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Loader