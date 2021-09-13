import styled from "styled-components";

// ---- Header Styles ----
export const DashboardHeader = styled.header`
  width: 100%;
  height: 4em;
  position: fixed;
  //   padding: 0.1em 0.1em;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  font-family: Aribau Grotesk;
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: center;
  z-index: 1;
`;

export const DashboardHeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1em;
`;

// ---- Side bar styles ----
export const DashboardSidebar = styled.section`
  width: 15em;
  height: 100vh;
  position: fixed;
  background: white;
  margin-top: 4em;
  box-shadow: 0px 10px 12px rgba(0, 0, 0, 0.05);
  z-index: 10;
`;

// export const DashboardSidebar
export const SidebarContainer = styled.div`
  margin-left: 3em;
  margin-right: 1.5em;
  margin-top: 3em;
  font-family: Aribau Grotesk;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  color: #000000;
`;

export const SidebarItems = styled.div`
  // background: #f5f7fa;
  border-radius: 3px;
  padding: 0.7em 1em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  cursor: pointer;
`;

export const UserLayout = styled.main`
  height: fit-content;
  margin-left: 15em;
  padding: 0.1em 0em;
`;

export const LayoutContainer = styled.div`
  margin-top: 7em;
  margin-left: 2em;
  margin-right: 2em;
  margin-bottom: 2em;
`;

export const LayoutTitle = styled.h3`
  font-family: Aribau Grotesk;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 32px;
  color: #000000;
`;
