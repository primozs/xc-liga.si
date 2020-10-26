import React from 'react';
import Alert from 'common/Alert';
import Anchor from 'common/Anchor';

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

  render() {
    const { error } = this.state;

    return error ? (
      <div className="flex items-center justify-center min-h-screen p-6 bg-gray-50">
        <div className="flex flex-col">
          <Alert title="There was an error:" message={error.message} />
          <div className="flex py-3 space-x-3">
            {/* <Anchor onClick={this.tryAgain}>Try again</Anchor> */}
            <Anchor onClick={this.tryAgain} type="outline">
              Poizkusi znova
            </Anchor>
            <Anchor href="/" type="primary">
              Začetna stran
            </Anchor>
          </div>
        </div>
      </div>
    ) : (
      <>{this.props.children}</>
    );
  }
}

export default ErrorBoundary;
