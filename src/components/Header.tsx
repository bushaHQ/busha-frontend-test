import styled from "styled-components";

import logo from "../logo.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />

      <Account>
        <ProfileAvatarStyle>
          <span>O</span>
        </ProfileAvatarStyle>
        <Name>
          <p>Oluwatobi Akindunjoye</p>
        </Name>
      </Account>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 160px;
  height: 56px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
`;

const Account = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileAvatarStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 36px;
  background: rgba(154, 165, 177, 0.3);
  width: 36px;
  height: 36px;

  & span {
    color: rgba(62, 76, 89, 1);
    font-size: 18px;
    font-weight: 500;
    line-height: 18px;
  }
`;
const Name = styled.div`
  margin-left: 5px;

  & p {
    color: rgba(62, 76, 89, 1);
    text-align: right;
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
  }
`;
