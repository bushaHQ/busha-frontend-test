import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { InnerWrapper } from "../index"

//Styled component generator
const Wrapper = styled.div`
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  padding: 10px 0px;
  margin-bottom: 70px;
  div {
    align-items: center;
    justify-content: space-between;
    font-family: AribauGrotesk;
    color: #3e4c59;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
`;

const ProfileIcon = styled.span`
  width: 36px;
  height: 36px;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(154, 165, 177, 0.3);
  @media (max-width: 400px) {
    font-size: 15px;
    line-height: 15px;
    width: 30px;
    height: 30px;
  }
`;

const UserName = styled.p`
font-weight: 600;
font-size: 14px;
line-height: 14px;
@media (max-width: 400px) {
width: min-content;
}
`;

const Header = (): JSX.Element => {
    return (
        <Wrapper>
            <InnerWrapper>
                <>
                    <Logo />
                    <Flex>
                        <ProfileIcon>O</ProfileIcon>
                        <UserName>Oluwatobi Akindunjoye</UserName>
                    </Flex>
                </>
            </InnerWrapper>
        </Wrapper>
    );
};

export default Header;