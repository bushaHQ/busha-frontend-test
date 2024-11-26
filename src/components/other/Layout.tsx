import styled from "styled-components";
import NavBar from "./NavBar";
import SidebarMenu from "./Sidebar";
import React, { useState } from "react";
import RenderIf from "../../utils/RenderIf";

function Layout({ children }: { children: React.ReactNode }) {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  return (
    <>
      <NavBar
        showMobileSidebar={showMobileSidebar}
        setShowMobileSidebar={setShowMobileSidebar}
      />
      <BodyContainer>
        <RenderIf condition={showMobileSidebar}>
          <MobileSidebarContainer>
            <SidebarMenu />
          </MobileSidebarContainer>
        </RenderIf>

        <HideElement>
          <SidebarMenu />
        </HideElement>

        <RenderIf condition={!showMobileSidebar}>
          <ChildrenContainer>{children}</ChildrenContainer>
        </RenderIf>
      </BodyContainer>
    </>
  );
}

export default Layout;

const BodyContainer = styled.div`
  display: flex;
  margin-left: 24px;
  margin-right: 24px;
  padding-top: 20px;

  @media (min-width: 968px) {
    display: flex;
    margin-left: 48px;
    margin-right: 48px;
    padding-top: 60px;
  }

  @media (min-width: 1200px) {
    margin-left: 160px;
    margin-right: 160px;
  }
`;

const MobileSidebarContainer = styled.div`
  @media (max-width: 968px) {
    background-color: white;
    z-index: 50;
  }
`;

const HideElement = styled.div`
  @media (max-width: 968px) {
    display: none;
  }
`;

const ChildrenContainer = styled.div`
  width: 100%;
  padding-left: 0px;

  @media (min-width: 969px) {
    width: 100%;
    padding-left: 65px;
  }
`;
