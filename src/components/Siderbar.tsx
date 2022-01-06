import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Sidebar: React.FC = () => (
  <SidebarWrapper>
    <li className="active">
      <Link
        to={"/"}
        className={window.location.pathname === "/" ? "font-weight-bold" : ""}
      >
        Wallets
      </Link>
    </li>
    <li>
      <Link to={"/"}>Prices</Link>
    </li>
    <li>
      <Link to={"/"}>Peer2peer</Link>
    </li>
    <li>
      <Link to={"/"}>Activity</Link>
    </li>
    <li>
      <Link to={"/"}>Settings</Link>
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
`;
