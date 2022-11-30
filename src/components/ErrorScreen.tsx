import Error from "../assets/error.svg";
import { ErrorProps } from "../types";

export default function ErrorScreen({ action }: ErrorProps) {
  const handleTryAgain = () => {
    action();
  };

  return (
    <div className="loading">
      <div className="error">
        <div className="network">
          <img src={Error} alt="error" />
          <p>Network Error</p>
        </div>
        <div className="button" onClick={handleTryAgain}>
          <p>Try again</p>
        </div>
      </div>
    </div>
  );
}
