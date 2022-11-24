import styled from "styled-components";
import LogoComponent from "./Logo";
import UsernameComponent from "./Username";

const HeaderComponent = () => {
    return (
        <HeaderContainer>
            <LogoComponent />
            <UsernameComponent />
        </HeaderContainer>
    );
}

export default HeaderComponent;

const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 56px;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
    z-index: 99;
    display: flex;
    flex-direction: row;
`;
