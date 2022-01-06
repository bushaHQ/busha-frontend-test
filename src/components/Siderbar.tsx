import React from "react";
import styled from "styled-components";
interface sideLinkType {
  link: string;
  name: string;
}
const Sidebar: React.FC = () => {
  const sidebarLinks: sideLinkType[] = [
    {
      link: "/",
      name: "Wallet",
    },
    {
      link: "/prices",
      name: "Prices",
    },
    {
      link: "/peer-2-peer",
      name: "Peer2Peer",
    },
    {
      link: "/activity",
      name: "Activity",
    },
    {
      link: "/settings",
      name: "Settings",
    },
  ];
  return (
    <SidebarWrapper>
      {sidebarLinks.map((link, i) => (
        <li className="active" key={i}>
          <a
            href={link.link}
            className={
              window.location.pathname === link.link ? "font-weight-bold" : ""
            }
          >
            {link.name}
          </a>
        </li>
      ))}
    </SidebarWrapper>
  );
};

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
