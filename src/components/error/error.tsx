import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../assets/svg/expired.svg";

interface IError {
  action: () => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Button = styled.div`
  background: #000000;
  border-radius: 40px;
  color: #fff;
  padding: 10px 25px;
  border: none;
  cursor: pointer;
`;

const Error = ({ action }: IError): JSX.Element => {
  return (
    <Wrapper>
      <ErrorIcon width={50} height={50} />
      <p>Network Error</p>
      <Button onClick={() => action()}>Try again</Button>
    </Wrapper>
  );
};

export default Error;
