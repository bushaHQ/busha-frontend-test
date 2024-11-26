import React from "react";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.navbar};
  color: ${(props) => props.theme.text};
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 767px) {
    img {
      height: 20px;
      margin-left: 30px;
    }
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProfileName = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.text};

  @media (max-width: 767px) {
    font-size: 0.6rem;
  }
`;

const CircularDiv = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.navBarProfile};
  color: ${(props) => props.theme.text};
  font-weight: bold;
  font-size: 1.2rem;
`;

const Navbar: React.FC = () => {
  const profileName = "Oluwatobi Akindunjoye";
  const firstLetter = profileName.charAt(0).toUpperCase();

  return (
    <NavbarWrapper>
      <Logo>
        <img src="./images/logo.png" alt="Logo" height={30} />
      </Logo>
      <ProfileSection>
        <CircularDiv>{firstLetter}</CircularDiv>
        <ProfileName>{profileName}</ProfileName>
      </ProfileSection>
    </NavbarWrapper>
  );
};

export default Navbar;
