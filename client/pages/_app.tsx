import React, { StrictMode } from 'react';
import { AppProps } from 'next/app';
import HtmlHeadBase from 'app/HtmlHeadBase';
import ErrorBoundary from 'app/ErrorBoundary';
import Layout from 'app/Layout';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <ErrorBoundary>
        <HtmlHeadBase />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </StrictMode>
  );
}

export default App;
