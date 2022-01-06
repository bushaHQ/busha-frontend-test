import React from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.svg";
const Navbar: React.FC = () => (
  <NavbarWrapper className="shadow">
    <div className="container">
      <div className="logo">
        <img src={logo} alt="busha-logo" />
      </div>
      <div className="user">
        <span>O</span>
        <p className="name-full">Oluwatobi Akindunjoye</p>
        <p className="name-short">Oluwatobi</p>
      </div>
    </div>
  </NavbarWrapper>
);

export default Navbar;

const NavbarWrapper = styled.div`
  width: 100vw;
  .container {
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .user {
      display: flex;
      justify-content: center;
      align-items: center;
      > span {
        font-size: 20px;
        font-weight: 800;
        background: rgba(154, 165, 177, 0.3);
        border-radius: 50%;
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 7px;
      }
      p {
        padding: 0;
        font-weight: 500;
        font-size: 14px;
        margin: 0;
        color: #3e4c59;
        font-style: normal;
      }
      .name-full {
        display: block;
      }
      .name-short {
        display: none;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .container {
      .user {
        .name-full {
          display: none;
        }
        .name-short {
          display: block;
        }
      }
    }
  }
`;
