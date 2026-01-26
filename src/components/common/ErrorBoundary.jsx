import React from "react";
import { Container, Alert, Button } from "react-bootstrap";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container className="mt-5">
          <Alert variant="danger">
            <Alert.Heading>Something went wrong!</Alert.Heading>
            <p>
              An error occurred in this component. You can try refreshing the
              page or navigating back to the dashboard.
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button
                onClick={() => window.location.reload()}
                variant="outline-danger"
                className="me-2"
              >
                Refresh Page
              </Button>
              <Button href="/" variant="danger">
                Back to Dashboard
              </Button>
            </div>
          </Alert>
          {process.env.NODE_ENV === "development" && (
            <details className="mt-3 text-muted">
              <summary>Error Details</summary>
              <pre className="mt-2 bg-light p-3 border rounded">
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
