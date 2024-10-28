import React, { FC } from "react";
import { ErrorIcon } from "../assets";
import Button from "./shared/Button";

interface ErrorProps {
  retryAction: () => void;
}

const Error: FC<ErrorProps> = ({ retryAction }) => {
  return (
    <div className="error-container">
      <img src={ErrorIcon} alt="error icon" />
      <p> Network Error</p>
      <Button title="Try again" onClick={retryAction} />
    </div>
  );
};

export default Error;
