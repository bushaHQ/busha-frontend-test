import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  fallBack: any;
}

interface State {
  hasError: boolean;
}

class ErrorSpace extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-center">{this.props.fallBack}</div>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorSpace;
