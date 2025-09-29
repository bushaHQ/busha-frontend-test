import React from 'react';
import Loader from './Loader';

type StatusContainerProps = {
  loading: boolean;
  error: string | null;
  onRetry: () => void;
  children: React.ReactNode;
};

const StatusContainer: React.FC<StatusContainerProps> = ({ loading, error, onRetry, children }) => {
  if (loading) {
    return (
      <div className="status-container">
        <Loader size={84} width={8} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-container">
        <div className="account-list-error">
          <img src="/error-icon.svg" alt="Error Icon" className="error-icon" />
          <div className="error-message">{error}</div>
          <button className="try-again-button" onClick={onRetry}>
            Try again
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default StatusContainer;
