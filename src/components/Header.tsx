import React from "react";
import styled from "styled-components";
import bushaLogo from "../assets/bushaLogo.svg";
import { flexBox } from "./style";
const Header = () => {
  return (
    <HeaderWrapper>
      <div className="logo">
        <img src={bushaLogo} alt="busha_logo" />
      </div>

      <div className="names">
        <span className="initials">O</span>
        <p className="user__name">Oluwatobi Akindunjoye</p>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  ${flexBox}
  padding:1rem 7rem;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(197, 186, 186, 0.5);

  .logo {
    width: 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .user__name {
    display: inline-block;
  }
  .initials {
    display: inline-block;
    width: 25px;
    height: 25px;
    line-height: 25px;
    margin-right: 0.5rem;
    padding-left: 0.4rem;
    border-radius: 50%;
    background: rgba(154, 165, 177, 0.3);
    color: #3e4c59;
    font-size: 1rem;
    right: 34rem;
  }
  .names {
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    padding: 1.5rem;
  }

  @media screen and (max-width: 450px) {
    padding: 1rem;

    .names {
      display: none;
    }
  }
`;

export default Header;
