import styled from "styled-components";
import { ReactComponent as ErrorSVG } from "../../assets/error.svg";

interface NetworkErrorProps {
  retryRequest: () => void;
}

export default function NetworkError({ retryRequest }: NetworkErrorProps) {
  return (
    <ErrorContainer>
      <ErrorSVG className="icon" />
      <p className="text">Network Error</p>
      <button className="action__btn" onClick={retryRequest}>
        Try again
      </button>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  text-align: center;
  padding: 0.8rem 0.5rem;

  .icon {
    width: 4.5rem;
  }
  .text {
    margin: 1.5rem 0;
    color: #3e4c59;
  }
  .action__btn {
    background: #000;
    border: 1px solid #000;
    border-radius: 40px;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 1rem 3rem;
    color: #fff;
  }
`;
