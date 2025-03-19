import React, { Component, ErrorInfo, ReactNode } from 'react';

export enum MicroFrontendErrorType {
  LOADING_FAILED = 'LOADING_FAILED',
  RUNTIME_ERROR = 'RUNTIME_ERROR',
  INITIALIZATION_ERROR = 'INITIALIZATION_ERROR',
  NETWORK_ERROR = 'NETWORK_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

export interface MicroFrontendErrorDetails {
  type: MicroFrontendErrorType;
  message: string;
  timestamp: Date;
  componentStack?: string | null;
  originalError?: Error;
}

export interface MicroFrontendErrorBoundaryProps {
  children: ReactNode;
  name?: string;
  fallback?: ReactNode | ((error: MicroFrontendErrorDetails) => ReactNode);
  onError?: (error: MicroFrontendErrorDetails) => void;
  onReset?: () => void;
  resetOnPropsChange?: boolean;
  resetOnNavigate?: boolean;
}

export interface MicroFrontendErrorBoundaryState {
  hasError: boolean;
  errorDetails: MicroFrontendErrorDetails | null;
}

export class ErrorBoundary extends Component<
  MicroFrontendErrorBoundaryProps,
  MicroFrontendErrorBoundaryState
> {
  constructor(props: MicroFrontendErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      errorDetails: null,
    };
  }

  static getDerivedStateFromError(error: Error): MicroFrontendErrorBoundaryState {
    let type = MicroFrontendErrorType.UNKNOWN_ERROR;
    let message = error.message || 'An unknown error occurred';

    if (error.message?.includes('Loading chunk')) {
      type = MicroFrontendErrorType.LOADING_FAILED;
      message = 'Failed to load micro frontend module';
    } else if (error.message?.includes('Network')) {
      type = MicroFrontendErrorType.NETWORK_ERROR;
      message = 'Network error occurred while loading micro frontend';
    }

    return {
      hasError: true,
      errorDetails: {
        type,
        message,
        timestamp: new Date(),
        originalError: error,
      },
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (this.state.errorDetails) {
      this.setState({
        errorDetails: {
          ...this.state.errorDetails,
          componentStack: errorInfo.componentStack,
        },
      });

      if (this.props.onError) {
        this.props.onError({
          ...this.state.errorDetails,
          componentStack: errorInfo.componentStack,
        });
      }
    }

    console.error(`[MFE Error][${this.props.name || 'unknown'}]`, error, errorInfo.componentStack);
  }

  componentDidUpdate(prevProps: MicroFrontendErrorBoundaryProps): void {
    if (
      this.props.resetOnPropsChange &&
      this.state.hasError &&
      this.props.children !== prevProps.children
    ) {
      this.resetErrorBoundary();
    }
  }

  componentDidMount(): void {
    if (this.props.resetOnNavigate) {
      window.addEventListener('popstate', this.resetErrorBoundary);
    }
  }

  componentWillUnmount(): void {
    if (this.props.resetOnNavigate) {
      window.removeEventListener('popstate', this.resetErrorBoundary);
    }
  }

  resetErrorBoundary = (): void => {
    this.setState({
      hasError: false,
      errorDetails: null,
    });

    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  render(): ReactNode {
    const { hasError, errorDetails } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      if (typeof fallback === 'function' && errorDetails) {
        return fallback(errorDetails);
      }

      if (fallback && typeof fallback !== 'function') {
        return fallback;
      }

      return (
        <div className="mfe-error-container">
          <h2>Micro Frontend Error</h2>
          <p>{errorDetails?.message || 'An error occurred while loading this component'}</p>
          <p>Type: {errorDetails?.type}</p>
          <button onClick={this.resetErrorBoundary}>Retry</button>
        </div>
      );
    }

    return children;
  }
}

export function withMicroFrontendErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps: Omit<MicroFrontendErrorBoundaryProps, 'children'>
): React.FC<P> {
  const WrappedComponent: React.FC<P> = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

  return WrappedComponent;
}
