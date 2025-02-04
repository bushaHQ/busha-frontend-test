import React from "react";
import styled from "styled-components";


const SidebarContainer = styled.div`
  position: fixed;
  top: 56px;
  left: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "0px" : "-200px")};
  width: 200px;
  height: 100vh;
  background: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease-in-out;
  z-index: 1000;
  padding: 0px;
`;

const Link = styled.a<{ active?: boolean }>`
  display: block;
  padding: 10px;
  color: ${({ active }) => (active ? "black" : "black")};
  font-weight: ${({ active }) => (active ? "500" : "400")};
  font-size: 16px;
  line-height: 16px;
  text-decoration: none;
  background-color: ${({ active }) => (active ? "#F5F7FA" : "transparent")};
  padding: 14px 17px;

  &:hover {
    background-color: #F5F7FA;
    font-weight: 400;
  }
`;

function ResponsiveSidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Link href="#" active>Wallets</Link>
      <Link href="#">Prices</Link>
      <Link href="#">Peer2Peer</Link>
      <Link href="#">Activity</Link>
      <Link href="#">Settings</Link>
    </SidebarContainer>
  );
}

export default ResponsiveSidebar