import React, { Component } from 'react';

export class ErrorBoundary extends Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Error loading remote module', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong while loading this section.</div>;
    }

    return this.props.children;
  }
}
