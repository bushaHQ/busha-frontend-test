import styled from "styled-components";
import Icon from '../../assets/logo.png';

const LogoComponent = () => {
    return (
        <LogoContainer>
            <ImageWrapper>
                <img src={Icon} alt="Logo" height="28px" />
            </ImageWrapper>
        </LogoContainer>
    );
}

export default LogoComponent;

const LogoContainer = styled.div`
    height: 56px;
    width: 50%;
    padding-left: 5%;
    line-height: 70px;
    border: 0px solid red;
`;
const ImageWrapper = styled.div`
    width: 128px;
    cursor: pointer;
`;