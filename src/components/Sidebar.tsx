import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 200px;
  padding: 20px;
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

function Sidebar() {
  return (
    <SidebarContainer>
      <Link href="#" active>Wallets</Link>
      <Link href="#">Prices</Link>
      <Link href="#">Peer2Peer</Link>
      <Link href="#">Activity</Link>
      <Link href="#">Settings</Link>
    </SidebarContainer>
  );
}

export default Sidebar;
