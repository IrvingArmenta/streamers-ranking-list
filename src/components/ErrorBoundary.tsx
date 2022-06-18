import React, { ReactNode } from 'react';
import { Component, ErrorInfo } from 'react';
import { currentEnv } from 'utils';

class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; errorMessage: string }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, errorMessage: 'Something went wrong' };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (currentEnv.isDevelopment) {
      console.error(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return <h2>{this.state.errorMessage}</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
