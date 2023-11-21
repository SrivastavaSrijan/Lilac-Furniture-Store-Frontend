import { Container, Typography } from '@mui/material';
import { Component, ErrorInfo, ReactNode } from 'react';
import * as React from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  // eslint-disable-next-line class-methods-use-this
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log runtime errors
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    // Fallback UI for runtime errors
    return this.state.hasError ? (
      <Container>
        <Typography variant="h4" color="error">
          Something went wrong.
        </Typography>
      </Container>
    ) : (
      this.props.children
    );
  }
}
