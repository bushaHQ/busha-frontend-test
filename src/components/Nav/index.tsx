import React from 'react';

import './index.scss';

export default function Nav() {
  return (
    <>
        <nav className='nav'>
            <div className='nav-content'>
                <div className='busha-logo'>
                    <img src='/busha_logo.png' alt='Busha Logo'/>
                    <div>busha</div>
                </div>
                <div className='busha-user'>
                    <div className='user-name-abrev'>o</div>
                    <div className='user-name'>Oluwatobi Akindunjoye</div>
                </div>
            </div>
        </nav>
    </>
  )
}
