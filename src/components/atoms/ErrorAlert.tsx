import React from "react";
import styled from "styled-components";
import AlertIcon from "./vectors/AlertIcon";
import AltCloseIcon from "./vectors/AltCloseIcon";

const StyledErrorAlert = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: #fff4f4;
  border: 1px solid #e0b3b2;
  border-radius: 8px;
  margin-top: 45px;

  .row {
    display: flex;
    align-items: center;

    .error-text {
      margin-left: 14px;
      color: #d72c0d;
      font-weight: 500;
    }
  }

  .close-icon {
    cursor: pointer;
  }
`;
interface Props {
  close: Function;
}
const ErrorAlert = ({ close = () => {} }: Props) => {
  return (
    <StyledErrorAlert>
      <div className="row">
        <AlertIcon />
        <span className="error-text">Network Error</span>
      </div>
      <span className="close-icon">
        <AltCloseIcon onClick={() => close()} />
      </span>
    </StyledErrorAlert>
  );
};

export default ErrorAlert;
