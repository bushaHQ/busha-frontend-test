import React from 'react'
import styled from 'styled-components'

import {ReactComponent as Logo} from '../../assets/svgs/Logo.svg'

const Header = () => {
  return (
    <HeaderContainer>
        <BushaLogo>
            <Logo/>
        </BushaLogo>
        <UserInfo>
          <p><span>o</span> Oluwatobi Akindunjoye</p>
        </UserInfo>
    </HeaderContainer>
  )
}

const HeaderContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5% 10% 0.5% 10%;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
   
`
const BushaLogo=styled.div``
const UserInfo=styled.div`
  &> p {
    font-size:14px;
    font-weight:500;
    display:flex;
    align-items: center;
    gap: 5px;
    &> span {
      color: #3E4C59;
      font-size:25px;
      font-weight: 500;
      border: 1px solid rgba(154, 165, 177, 0.3);
      background-color: rgba(154, 165, 177, 0.3);
      padding: 0px 8px 2px 8px;
      border-radius: 50%;
    }
  }
`

export default Header;
