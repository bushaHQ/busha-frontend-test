import styled from "styled-components";

const Wrapper = styled.div`
  height: 56px;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px 0px #0000000d;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 900;
`;

const InnerWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: calc(100% - 20px);
  padding: 0 10px;
`;

const LogoWrapper = styled.div`
  max-width: 121px;
  width: 100%;
`;

const LogoIcon = styled.img`
  width: 100%;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const InitialsWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #9aa5b14d;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3e4c59;
  font-size: 18px;
  font-weight: 500;
`;

const ProfileName = styled.p`
  color: #3e4c59;
  font-size: 14px;
  font-weight: 500;

  @media only screen and (max-width: 760px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <MainWrapper>
          <LogoWrapper>
            <LogoIcon src="logo.svg" alt="logo" />
          </LogoWrapper>

          <ProfileWrapper>
            <InitialsWrapper>O</InitialsWrapper>
            <ProfileName>Oluwatobi Akindunjoye</ProfileName>
          </ProfileWrapper>
        </MainWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;
