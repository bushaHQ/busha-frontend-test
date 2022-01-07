import React, { useState } from "react";
import styled from "styled-components";
interface sideLinkType {
  link: string;
  name: string;
}

interface BurgerType {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}
export const Burger = ({ open, setOpen }: BurgerType) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
const StyledBurger = styled.button<any>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.8rem;
  height: 1.8rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 1.8rem;
    height: 0.2rem;
    background: rgb(76, 164, 74);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-of-type {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-of-type(2) {
      // opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(-4px)" : "translateX(0)")};
    }

    :nth-of-type(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
const Sidebar: React.FC = () => {
  const [show, setShow] = useState(false);
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
    <SidebarWrapper show={show}>
      <div className="menu">
        <Burger open={show} setOpen={setShow} />
      </div>
      <ul className={`shadow ${show && "show"}`}>
        {sidebarLinks.map((link, i) => (
          <li
            className={window.location.pathname === link.link ? "active" : ""}
            key={i}
          >
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
      </ul>
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div<{ show: boolean }>`
  .menu {
    display: none;
  }
  ul {
    width: 80%;
    list-style-type: none;
    padding: 0;
    transition: all 0.3s linear;
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
  }
  @media screen and (max-width: 590px) {
    position: fixed;
    top: 70px;
    z-index: 2;
    .menu {
      display: block;
    }
    ul {
      width: 250px;
      border-radius: 10px;
      background: #ffffff;
      margin-left: -300px;
    }
    .show {
      margin-left: 0;
    }
  }
`;
