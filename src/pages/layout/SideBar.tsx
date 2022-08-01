import styled from "styled-components";
import { useState, useEffect } from 'react';

export interface ModalProps {
    sideBar: boolean;
}

const links = ["Wallets", "Prices", "Peer2Peer", "Activity", "Settings"]

export function SideBar(props: React.PropsWithChildren<ModalProps>) {
    const [sideBar, setSideBar] = useState(props.sideBar)

    useEffect(() => {
        setSideBar(props.sideBar);
    }, [props.sideBar]);

    return (
        <>
            {sideBar &&
                <Container id="side-bar">
                    <Selected>{links[0]}</Selected>
                    {links.slice(1).map((l) => <Link>{l}</Link>)}
                </Container>}
        </>
    )
}

const Container = styled.div`
    width: 240px;
    padding-left: 11.1111%;
    height: 100vh;
    display: flex;
    float: left;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 116px;
    position: fixed;
    background: white;
    z-index: 1;
    @media (max-width: 750px) {
        width: 50%;
        box-shadow: 50vw 0px 0px 50vw rgba(0, 0, 0, 0.4);
    }
    @media (max-width: 500px) {
        width: 60%;
    }
    @media (max-width: 400px) {
        width: 70%;
    }
`

const Link = styled.a`
    width: 206px;
    height: 44px;
    padding: 0px 17px;
    margin-bottom: 4px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
    text-decoration: none;
    color: #3E4C59;
`

const Selected = styled.a`
    width: 206px;
    height: 44px;
    padding: 0px 17px;
    margin-bottom: 4px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    background-color: rgba(245, 247, 250, 1);
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;
    color: #000000;
`