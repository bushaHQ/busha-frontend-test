import styled from "styled-components";
import Error from '../../assets/img/error.png';

const ErrorComponent = () => {
    return (
        <ErrorContainer>
            <ImageWrapper><img src={Error} alt="Error" style={{alignSelf: 'center'}} /></ImageWrapper>
            <TextWrapper> Network Error</TextWrapper>
        </ErrorContainer>
    );
}

export default ErrorComponent;

const ErrorContainer = styled.div`
    height: auto;
    width: 150px;
    padding-left: 0%;
    box-sizing: border-box;
    display: block;
    justify-content: center;
    align-items: center;
    align-contents: center;
    margin: 40px auto;
    border: 0px solid red;
`;
const ImageWrapper = styled.div`
    width: 100%;
`;
const TextWrapper = styled.div`
    width: 100%;
    font-family: 'Aribau Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #3E4C59;
`;