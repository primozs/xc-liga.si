import React, { StrictMode, useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import HtmlHeadBase from 'app/HtmlHeadBase';
import ErrorBoundary from 'app/ErrorBoundary';
import { ReactQueryCacheProvider, QueryCache } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { useRouter } from 'next/router';
import Layout from 'app/Layout';
import '../styles/globals.css';

const queryCache = new QueryCache();

function App({ Component, pageProps }: AppProps) {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'ononline' in window &&
      'onoffline' in window
    ) {
      setIsOnline(window.navigator.onLine);
      if (!window.ononline) {
        window.addEventListener('online', () => {
          setIsOnline(true);
        });
      }
      if (!window.onoffline) {
        window.addEventListener('offline', () => {
          setIsOnline(false);
        });
      }
    }
  }, []);

  const router = useRouter();
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      // @ts-ignore
      window.workbox !== undefined &&
      isOnline
    ) {
      // skip index route, because it's already cached under `start-url` caching object
      if (router.route !== '/') {
        // @ts-ignore
        const wb = window.workbox;
        wb.active.then((worker: any) => {
          wb.messageSW({ action: 'CACHE_NEW_ROUTE' });
        });
      }
    }
  }, [isOnline, router.route]);

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
