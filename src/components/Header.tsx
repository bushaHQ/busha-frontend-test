import { FC } from 'react'
import styled from 'styled-components'
import BushaLogo from '../assets/images/Busha-Logo.svg'

const Header: FC = () => {
  return (
    <HeaderContainer>
        <Logo src={BushaLogo} />
        <Account>
            <Icon>O</Icon>
            <Name>Oluwatobi Akindunjoye</Name>
        </Account>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1 1 auto;
    padding-left: 16rem;
    padding-right: 16rem;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
    overflow-x: hidden;
`

const Logo = styled.img`
    max-width: 12.04rem
`

const Account = styled.div`
    display: flex;
    width: 19.7rem;
    gap: 5px;
    align-items: center;
`
    
const Icon = styled.div`
    background-color: #9AA5B14D;
    width: 3.6rem;
    height: 3.6rem;

    display: flex;
    justify-content: center;
    align-items: center;    
    border-radius: 50%;
    font-weight: 500;
    font-family: 'Aribau Grotesk';
    font-size: 1.8rem;
    line-height: 1.8rem;
`

const Name = styled.h6`
    font-size: 1.4rem;
    font-weight: 500;
    font-family: 'Aribau Grotesk';
    line-height: 1.4rem;
`

export default Header