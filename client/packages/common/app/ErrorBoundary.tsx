import React from 'react';
import AlertNotification from './AlertNotification';

type Props = {
  children: React.ReactNode;
};

type State = {
  error: Error | null;
};

class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error | null) {
    return { error };
  }

  componentDidCatch() {
    // log the error
  }

  tryAgain = () => this.setState({ error: null });
  navigateHome = () => {
    // @ts-ignore
    window.location = '/';
  };

  render() {
    const { error } = this.state;

    return error ? (
      <div>
        <AlertNotification message={`There was an error: "${error.message}"`} />
        <div>
          <button onClick={this.tryAgain}>Try again</button>
          <button onClick={this.navigateHome}> Home page</button>
        </div>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
