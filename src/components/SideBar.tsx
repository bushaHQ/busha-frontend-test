import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const SidebarWrapper = styled.div.attrs<{ isOpen: boolean }>((props) => ({
    "aria-hidden": !props.isOpen,
}))<{ isOpen: boolean }>`
    max-width: 100%;
    background-color: ${(props) => props.theme.sidebar}; /* Theme-based color */
    color: ${(props) => props.theme.text}; /* Theme-based text color */
    padding: 1rem 0;
    transition: transform 0.3s ease-in-out;

    @media (max-width: 768px) {
        position: absolute;
        left: ${(props) => (props.isOpen ? "0" : "-250px")};
        top: 0;
        width: 250px;
    }
`;

const Menu = styled.ul`
    list-style: none;
    padding: 0;
`;

const MenuItem = styled.li<{ isActive: boolean }>`
    margin: 0.5rem 0;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${(props) =>
        props.isActive
            ? props.theme.sidebarActiveLink
            : props.theme.sidebarinActiveLink};
    font-weight: ${(props) => (props.isActive ? 600 : 400)};
    color: ${(props) => props.theme.text}; /* Theme-based text color */

    &:hover {
        background-color: ${(props) => props.theme.hoverBackground};
    }
`;

const ToggleButton = styled.button`
    border: none;
    padding: 0.8rem;
    cursor: pointer;
    position: fixed;
    top: 0.7rem;
    left: 0;
    display: none;
    background: none;
    color: ${(props) => props.theme.text}; /* Theme-based color */

    @media (max-width: 768px) {
        display: block;
        z-index: 4;
    }
`;

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(0); // Track active menu item
    const sidebarRef = useRef<HTMLDivElement>(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuClick = (index: number) => {
        setActiveMenu(index); // Set the active menu item
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            sidebarRef.current &&
            !sidebarRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false); // Close sidebar if clicking outside of it
        }
    };

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;
        if (isOpen && isMobile) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            <ToggleButton onClick={toggleSidebar}>
                <span className="material-symbols-outlined">menu</span>
            </ToggleButton>

            <SidebarWrapper ref={sidebarRef} isOpen={isOpen}>
                <Menu>
                    <MenuItem
                        isActive={activeMenu === 0}
                        onClick={() => handleMenuClick(0)}
                    >
                        Wallets
                    </MenuItem>
                    <MenuItem
                        isActive={activeMenu === 1}
                        onClick={() => handleMenuClick(1)}
                    >
                        Prices
                    </MenuItem>
                    <MenuItem
                        isActive={activeMenu === 2}
                        onClick={() => handleMenuClick(2)}
                    >
                        Peer2Peer
                    </MenuItem>
                    <MenuItem
                        isActive={activeMenu === 3}
                        onClick={() => handleMenuClick(3)}
                    >
                        Activity
                    </MenuItem>
                    <MenuItem
                        isActive={activeMenu === 4}
                        onClick={() => handleMenuClick(4)}
                    >
                        Settings
                    </MenuItem>
                </Menu>
            </SidebarWrapper>
        </>
    );
};

export default SideBar;
