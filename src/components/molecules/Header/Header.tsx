import React, { ReactNode } from 'react'
import BushaLogo from '../../../assets/logos/BushaLogo'

interface HeaderProps {
    children: ReactNode;
}

const Header = (props: HeaderProps) => {
    return (
        <Header>
            <div className="navbar-header">
                <div className="logo">
                    <BushaLogo />
                </div>

                <div className="username">
                    <div>
                        <p>O</p>
                    </div>
                    <p>Oluwatobi Akindunjoye</p>
                </div>
            </div>
           
        </Header>
    )
  }
  
  export default Header;