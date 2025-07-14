import styled from "styled-components";
import { NavItem } from "./NavItem";
import { useState } from "react";

const navItems = [
    { id: 1, title: 'Wallets' },
    { id: 2, title: 'Prices' },
    { id: 3, title: 'Peer2Peer' },
    { id: 4, title: 'Activity' },
    { id: 5, title: 'Settings' }
]

const NavWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const NavMenu = () => {
    const [activeId, setActiveId] = useState(1)

    return (
        <NavWrapper>
            {navItems.map((item) => <NavItem key={item.id} item={item} activeId={activeId} setActiveId={setActiveId} />)}
        </NavWrapper>
    )
}
