import styled from 'styled-components';
import NavBar from "./NavBar";
import SidebarMenu from "./Sidebar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <BodyContainer>
        <SidebarMenu />
        <ChildrenContainer>{children}</ChildrenContainer>
      </BodyContainer>
    </>
  );
}

export default Layout;

const BodyContainer = styled.div`
  display: flex;
  margin-left: 160px;
  margin-right: 160px;
  padding-top: 60px;
`;

const ChildrenContainer = styled.div`
  width: 100%;
  padding-left: 65px;
`;
