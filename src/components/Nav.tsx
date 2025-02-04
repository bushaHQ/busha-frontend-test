import React, { useState } from "react";
import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 160px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  height: 28px;

  @media (max-width: 1024px) {
    padding: 14px 50px;
  }

  @media (max-width: 768px) {
    padding: 14px 10px;
  }
`;

const MenuButton = styled.button`
  display: none;

  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  margin-right: 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20px;
    width: 24px;
  }

  span {
    display: block;
    height: 2px;
    width: 24px;
    background-color: #3e4c59;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const Username = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #3e4c59;

  @media (max-width: 768px) {
    display: none;
  }
`;

function Nav({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <NavBar>
      <LogoContainer>
        <MenuButton
          onClick={(e) => {
            toggleSidebar();
            e.stopPropagation();
          }}
        >
          <span />
          <span />
          <span />
        </MenuButton>
        <Logo>
          <img src="assets/images/logo.svg" alt="Logo" />
        </Logo>
      </LogoContainer>
      <UserSection>
        <Icon>
          <img src="assets/images/user.svg" alt="User" />
        </Icon>
        <Username>Oluwatobi Akindunjoye</Username>
      </UserSection>
    </NavBar>
  );
}

export default Nav;
