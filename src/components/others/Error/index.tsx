import styled from "styled-components";
import Button from "components/form/Button";
import ErrorSvg from "assets/icons/error.svg";
import Error2Svg from "assets/icons/error-2.svg";
import Cancel2 from "assets/icons/cancel-2.svg";
import Image from "../Image";

type ErrorProps = {
  message: string;
  onRetry: () => void;
};

const ErrorWrapper = styled.div`
  .error-img {
    display: block;
    margin: 0 auto 20px;
  }

  .error-message {
    font-size: 18px;
    font-weight: 400;
    line-height: 23.4px;
    text-align: center;
    color: #3e4c59;
    outline: none;
    margin-bottom: 30px;
  }
`;

const ToastErrorWrapper = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
  gap: 20px;
  background: #fff4f4;
  height: 50px;
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid #e0b3b2;

  .error-content {
    display: flex;
    align-item: center;
    gap: 10px;

    img {
      width: 20px;
      height: 20px;
    }

    p {
      color: #d72c0d;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    }
  }
`;

export function Error({ message, onRetry }: ErrorProps) {
  return (
    <ErrorWrapper>
      <Image src={ErrorSvg} alt="error" className="error-img" />
      <p className="error-message">{message}</p>
      <Button text="Try again" onClick={onRetry} />
    </ErrorWrapper>
  );
}

export function ToastError({ message, onRetry }: ErrorProps) {
  return (
    <ToastErrorWrapper>
      <div className="error-content">
        <Image src={Error2Svg} alt="error" className="error" />
        <p className="error-message">{message}</p>
      </div>
      <button type="button" className="error-close" onClick={onRetry}>
        <Image src={Cancel2} alt="error" className="error" />
      </button>
    </ToastErrorWrapper>
  );
}
