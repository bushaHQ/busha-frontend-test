import styled from "styled-components";
import Loader from "../shared/Loader";

const ButtonComponent = (props: any) => {
    const { text, onClick, loading } = props;
    return (
        <ButtonWrapper onClick={onClick} disabled={loading}>{loading ? <Loader />: <>{text}</>}</ButtonWrapper>
    );
}

export default ButtonComponent;

const ButtonWrapper = styled.button`
    width: 186px;
    height: 54px;
    border: 0;
    background: #000000;
    border-radius: 40px;
    cursor: pointer;
    font-family: 'Aribau Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
    margin: 0 auto;
`;