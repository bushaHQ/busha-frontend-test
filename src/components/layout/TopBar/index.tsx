import styled from "styled-components";
import Logo from "../../../assets/images/logo.svg";

export default function TopBar() {
  return (
    <TopBarDiv>
      <TopBarContainer>
        <a href="/" className="logo">
          <img src={Logo} alt="" />
        </a>
        <div>
          <span className="avatar">O</span>
          <span className="username">Oluwatobi Akindunjoye</span>
        </div>
      </TopBarContainer>
    </TopBarDiv>
  );
}

const TopBarDiv = styled.header`
  width: 100%;
  height: 56px;
  background: #ffffff;
  box-shadow: 0px 4px 12px #0000000d;

  .avatar {
    height: 36px;
    width: 36px;
    border-radius: 50%;
    padding: 10px;
    background: #9aa5b14d;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
  }

  .username {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: #3e4c59;
  }
`;

const TopBarContainer = styled.div`
  width: 1120px;
  max-width: 100%;
  height: 100%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    padding: 0px 24px;
  }
`;
