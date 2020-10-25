import React, { StrictMode } from 'react';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import HtmlHeadBase from 'app/HtmlHeadBase';
import ErrorBoundary from 'app/ErrorBoundary';
import { ReactQueryCacheProvider, QueryCache } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import Layout from 'app/Layout';
import '../styles/globals.css';

const queryCache = new QueryCache();

function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <ErrorBoundary>
        <HtmlHeadBase />
        <RecoilRoot>
          <Layout>
            <ReactQueryCacheProvider queryCache={queryCache}>
              <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
              </Hydrate>
            </ReactQueryCacheProvider>
          </Layout>
        </RecoilRoot>
      </ErrorBoundary>
    </StrictMode>
  );
}

export default App;
