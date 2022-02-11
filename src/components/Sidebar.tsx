import React from "react";
import styled from "styled-components";
import { flexBox } from "./style";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <a href="0#" className="sidebar__links active disable">
        Wallets
      </a>

      <a href="0#" className="sidebar__links disable">
        Prices
      </a>

      <a href="0#" className="sidebar__links disable">
        Peer2Peer
      </a>

      <a href="0#" className="sidebar__links disable">
        Activity
      </a>

      <a href="#0" className="sidebar__links disable">
        Settings
      </a>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  ${flexBox}
  flex-direction:column;
  flex-basis: 20%;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 2rem;
  /* padding: 0 0 0 7rem; */

  .sidebar__links {
    display: block;
    color: #000000;
    margin: 0.5rem 0;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.8rem;
    padding-left: 1rem;
    border-radius: 3px;

    &.active,
    &:hover {
      background: #f5f7fa;
      font-weight: 600;
      width: 100%;
    }
  }

  .disable {
    pointer-events: none;
    cursor: default;
  }

  @media screen and (max-width: 767px) {
    flex-basis: 10%;
    padding: 0rem;

    .sidebar__links {
      font-size: 0.8rem;
      padding: 0 0.5rem;
    }
  }

  @media screen and (max-width: 289px) {
    .sidebar__links {
      padding: 0rem;
    }
  }
`;

export default Sidebar;
