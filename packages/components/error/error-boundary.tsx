import React, { Component, ErrorInfo, ReactNode } from 'react';
import retry from '@assets/icons/retry.svg?url';
import stepBack from '@assets/icons/step-back.svg?url';
import notFound404 from '@assets/illustrations/404-error.svg?url';
import comingSoon from '@assets/illustrations/coming-soon.svg?url';
import { Button, Card, Icon, Image } from '@bugg-m/bugg-ui';

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
  mfeWIP?: boolean;
  fallback?: ReactNode | ((error: MicroFrontendErrorDetails) => ReactNode);
  onError?: (error: MicroFrontendErrorDetails) => void;
  onReset?: () => void;
  onGoBack?: () => void;
  navigate?: (destination: string | number) => void;
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

  goBack = (): void => {
    this.setState({ hasError: false, errorDetails: null });

    if (this.props.onGoBack) {
      this.props.onGoBack();
    } else if (this.props.navigate) {
      this.props.navigate(-1);
    } else {
      window.history.back();
    }
  };

  resetErrorBoundary = (): void => {
    this.setState({ hasError: false, errorDetails: null });

    if (this.props.onReset) {
      this.props.onReset();
    } else if (this.props.navigate) {
      this.props.navigate(0);
    } else {
      window.location.reload();
    }
  };

  render(): ReactNode {
    const { hasError, errorDetails } = this.state;
    const { children, fallback, mfeWIP } = this.props;

    if (hasError) {
      if (typeof fallback === 'function' && errorDetails) {
        return fallback(errorDetails);
      }

      if (fallback && typeof fallback !== 'function') {
        return fallback;
      }

      return (
        <main className="w-full h-screen flex-center px-10 md:pt-10">
          <Card
            className="flex-center flex-col xs:w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 gap-5"
            colorScheme="primary"
            variant="filled"
            tone={100}
            size="xl"
            hoverAble
          >
            <div className="flex-center p-5">
              <Image
                src={mfeWIP ? comingSoon : notFound404}
                alt="not found"
                className="profile-responsive group-hover:scale-90 transition-transform duration-300 drop-shadow-xl"
              />
            </div>
            <div className="flex-center text-center flex-col gap-5">
              {mfeWIP ? (
                <>
                  <span className="text-sm uppercase xs:text-base sm:text-lg md:text-xl text-neutral-700 font-semibold group-hover:text-neutral-500">
                    MICRO-FRONTEND COMING SOON
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light">
                    Since Next.js uses a highly customized build pipeline that splits its output
                    into multiple chunks, the container chunk is generated with a unique hash
                    instead of a fixed file name. This causes integration issues with the host
                    application, which expects a consistent remote entry point. I'm actively
                    exploring community solutions to address these challenges.
                  </p>
                </>
              ) : (
                <>
                  <span className="text-sm xs:text-base sm:text-lg md:text-xl text-neutral-700 font-semibold">
                    {errorDetails?.type}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-600 font-light">
                    {errorDetails?.message || 'An error occurred while loading this component'}
                  </span>
                </>
              )}
              <div className="w-full flex-between-center gap-3">
                <Button
                  className="font-light mt-5 text-xs xs:text-sm hover-scale-90"
                  onClick={this.goBack}
                  colorScheme="secondary"
                  size="sm"
                  leftIcon={
                    <Icon
                      src={stepBack}
                      iconColor="default"
                    />
                  }
                >
                  Go Back
                </Button>
                <Button
                  className="font-light mt-5 text-xs xs:text-sm hover-scale-90"
                  onClick={this.resetErrorBoundary}
                  size="sm"
                  colorScheme="secondary"
                  rightIcon={
                    <Icon
                      src={retry}
                      iconColor="default"
                    />
                  }
                >
                  Retry
                </Button>
              </div>
            </div>
          </Card>
        </main>
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
