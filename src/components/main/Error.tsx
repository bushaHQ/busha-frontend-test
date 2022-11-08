import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../assets/svg/expired.svg";
import { ErrorProps } from "../types"

//Styled component generator
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .error-body {
    color: #3E4C59; 
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    margin: 26px 0;
  }
  transition-delay: 20ms;
`;

const Button = styled.button`
  background: #000;
  color: #fff;
  margin-top: 9px;
  padding: 14px 54px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  @media (max-width: 400px) {
    padding: 15px 30px;
    font-size: 14px;
    line-height: 14px;
    margin: 0;
}
`;

const Error = ({ action }: ErrorProps): JSX.Element => {
    return (
        <Wrapper>
            <ErrorIcon width={100} height={100} />
            <p className="error-body">Network Error</p>
            <Button onClick={() => action()}>Try again</Button>
        </Wrapper>
    );
};

export default Error;
