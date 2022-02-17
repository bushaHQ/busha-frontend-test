import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

const Wrapper = styled.div`
  width: 100%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: AribauGrotesk;
  color: #3e4c59;
  max-width: 1100px;
  margin: auto;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const UserIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(154, 165, 177, 0.3);
`;

const Header = (): JSX.Element => {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <Flex>
          <UserIcon>O</UserIcon>
          <p>Oluwatobi Akindunjoye</p>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Header;
