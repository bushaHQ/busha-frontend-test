import React from "react";
import styled from "styled-components";
const Sidebar: React.FC = () => (
  <SidebarWrapper>
    <li className="active">
      <a
        href="/"
        className={window.location.pathname === "/" ? "font-weight-bold" : ""}
      >
        Wallets
      </a>
    </li>
    <li>
      <a href="/">Prices</a>
    </li>
    <li>
      <a href="/">Peer2peer</a>
    </li>
    <li>
      <a href="/">Activity</a>
    </li>
    <li>
      <a href="/">Settings</a>
    </li>
  </SidebarWrapper>
);

export default Sidebar;

const SidebarWrapper = styled.ul`
  width: 80%;
  list-style-type: none;
  padding: 0;
  li {
    border-radius: 3px;
    padding: 10px 15px;
    margin-bottom: 5px;
    a {
      text-decoration: none;
      color: #000000;
    }
    :hover {
      background: #f5f7fa;
    }
  }
  .active {
    background: #f5f7fa;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
