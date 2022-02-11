import React from "react";
import styled from "styled-components";
import errorImg from "../assets/error.svg";
import { flexBox, ButtonStyle } from "./style";
const ErrorPage: React.FC<{ func: () => void }> = ({ func }) => {
  return (
    <ErrorWrapper>
      <img src={errorImg} alt="errorImage" />
      <p className="error__title">Network Error</p>
      <button onClick={func} className="try__btn">
        Try Again
      </button>
    </ErrorWrapper>
  );
};

const ErrorWrapper = styled.div`
  ${flexBox}
  flex-direction:column;
  justify-content: center;

  .error__title {
    margin: 1rem 0;
  }

  .try__btn {
    ${ButtonStyle}
  }
`;

export default ErrorPage;
