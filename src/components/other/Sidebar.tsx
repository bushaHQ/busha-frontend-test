// SidebarMenu.tsx
import { useState } from "react";
import styled, { keyframes } from "styled-components";

const menuItems = ["Wallets", "Prices", "Peer2Peer", "Activity", "Settings"];

const SidebarMenu = () => {
  const [activeItem, setActiveItem] = useState("Wallets");

  const handleClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <Sidebar>
      {menuItems.map((item, index) =>
        item === activeItem ? (
          <ActiveBackground key={item}>
            <MenuItem
              delay={index * 0.1}
              active
              onClick={() => handleClick(item)}
            >
              {item}
            </MenuItem>
          </ActiveBackground>
        ) : (
          <MenuItem
            delay={index * 0.1}
            key={item}
            onClick={() => handleClick(item)}
          >
            {item}
          </MenuItem>
        )
      )}
    </Sidebar>
  );
};

export default SidebarMenu;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  position: sticky;
  top: 0;
  left: 0;
`;

const MenuItem = styled.button<{ active?: boolean; delay: number }>`
  font-size: 18px;
  color: ${(props) => (props.active ? "#000" : "#3E4C59")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  padding: 17px 14px;
  cursor: pointer;
  text-align: start;
  border: none;
  background-color: transparent;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease forwards;
  animation-delay: ${(props) => props.delay}s;

  &:hover {
    color: #000;
  }
`;

const ActiveBackground = styled.div`
  background-color: transparent;

  @media (min-width: 969px) {
    border: none;
    text-align: start;
    width: 100%;
    background-color: #f5f7fa;
    border-radius: 3px;
  }
`;
