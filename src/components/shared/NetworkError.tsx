import React from "react";
import "./NetworkError.scss"
interface NetworkErrorProps {
  handleClick: () => void;
}

function NetworkError({ handleClick }: NetworkErrorProps) {
  return (
    <div>
      <div className="network-error-container">
        <div className="network-error-icon">
          <img src="Frame 4.svg" alt="" width="4px" height="60px" />
        </div>

        <h1>Network Error</h1>
      </div>
      <button className="network-error-button" onClick={() => handleClick()}>
        Try Again
      </button>
    </div>
  );
}

export default NetworkError;
