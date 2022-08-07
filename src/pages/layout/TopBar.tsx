import styled from "styled-components";
import { SetStateAction, useEffect, useState } from 'react';

export interface ModalProps {
    sideBar: boolean
    setSideBar: (value: SetStateAction<boolean>) => void;
}

export function TopBar(props: React.PropsWithChildren<ModalProps>) {
    const [sideBar, setSideBar] = useState(true)

    useEffect(() => {
        setSideBar(props.sideBar)
    }, [props.sideBar])

    const toggleIsLoading = () => {
        setSideBar(current => !current);
        props.setSideBar(current => !current);
    }

    return (
        <Container>
            <Toggle onClick={toggleIsLoading}>
                {sideBar === false ?
                    <img src="../assets/icons/SideBarIcon.svg" alt="SideBar Icon" /> :
                    <img src="../assets/icons/Close.svg" alt="Close Icon" />}
            </Toggle>
            <Logo href="/"><img src="../assets/BushaLogo.svg" alt="Busha Logo" /></Logo>
            <NameContainer>
                <img style={{ borderRadius: '50%' }}
                    src="../assets/demo.png" alt="User" width="36px" height="36px" />
                <UserName>Oluwatobi Akindunjoye</UserName>
            </NameContainer>
        </Container >
    )
}

const Container = styled.div`
    height: 56px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    position: fixed;
    z-index: 2;
    box-shadow: 0px 4px 12px 0px rgba(0,0,0,0.05);
`

const UserName = styled.span`
    cursor: default;
    @media (max-width: 750px) {
        display: none;
    }
`

const NameContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(62, 76, 89, 1);
    margin-right: 11.1111%;
`

const Logo = styled.a`
    margin-left: 11.1111%;
    @media (max-width: 750px) {
        margin-left: 0;
    }
`

const Toggle = styled.button`
    width: 25px;
    height: 25px;
    padding: 0;
    background: white; 
    border: none;
    margin-left: 11.1111%;
    @media (min-width: 751px) {
        display: none;
    }
`