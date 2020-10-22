import React, { StrictMode } from 'react';
import { AppProps } from 'next/app';
import Layout from 'common/app/Layout';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StrictMode>
  );
}

export default App;
