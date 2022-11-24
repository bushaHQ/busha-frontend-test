import styled from "styled-components";
import CloseIcon from '../../assets/img/close-icon.png';
import ErrorIcon from '../../assets/img/error-icon.png';

const ErrorMessageComponent = (props: any) => {
    const { text, onClick} = props;
    return (
        <MessageWrapper>
            <MessageRow>
                <MessageLeftRow>
                    <img src={ErrorIcon} alt="x" style={{marginRight: '10px'}} /> {text} 
                </MessageLeftRow>
                <MessageRightRow>
                    <Close onClick={onClick}><img src={CloseIcon} alt="x" /></Close>
                </MessageRightRow>
            </MessageRow>
        </MessageWrapper>
    );
}

export default ErrorMessageComponent;

const MessageWrapper = styled.div`
    
    padding: 12px;

    width: 100%;
    height: 50px;
    background: #FFF4F4;
    border: 1px solid #E0B3B2;
    border-radius: 8px;
    box-sizing: border-box;

    
`;
const MessageRow = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
`;
const MessageLeftRow = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: row;
    font-family: 'Aribau Grotesk';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #D72C0D;
`;
const MessageRightRow = styled.div`
    width: 20%;
    height: auto;
    display: flex;
    flex-direction: row-reverse;
`;
const Close = styled.div`
    color: #D72C0D;
    background-color: transparent;
    border: 0;
    cursor: pointer;
`;