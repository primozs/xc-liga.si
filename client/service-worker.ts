import { skipWaiting, clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import {
  NetworkFirst,
  CacheFirst,
  StaleWhileRevalidate,
} from 'workbox-strategies';
import { registerRoute, setDefaultHandler } from 'workbox-routing';
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';

skipWaiting();
clientsClaim();

// @ts-ignore
// eslint-disable-next-line
precacheAndRoute(self.__WB_MANIFEST);

cleanupOutdatedCaches();

registerRoute(
  '/',
  new NetworkFirst({
    cacheName: 'start-url',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 1,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);

registerRoute(
  /\/season\/.*$/i,
  new NetworkFirst({
    cacheName: 'season-url',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 3,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);

registerRoute(
  /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
  new CacheFirst({
    cacheName: 'google-fonts',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 4,
        maxAgeSeconds: 31536e3,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);
registerRoute(
  /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
  new StaleWhileRevalidate({
    cacheName: 'static-font-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 4,
        maxAgeSeconds: 604800,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);

registerRoute(
  /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
  new CacheFirst({
    cacheName: 'static-image-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 64,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);

registerRoute(
  /\.(?:js)$/i,
  new StaleWhileRevalidate({
    cacheName: 'static-js-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);
registerRoute(
  /\.(?:css|less)$/i,
  new StaleWhileRevalidate({
    cacheName: 'static-style-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);
registerRoute(
  /\.(?:json|xml|csv)$/i,
  new NetworkFirst({
    cacheName: 'static-data-assets',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);

registerRoute(
  /\/scores\/.*$/i,
  new NetworkFirst({
    cacheName: 'apis',
    networkTimeoutSeconds: 10,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 16,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);

registerRoute(
  /.*/i,
  new NetworkFirst({
    cacheName: 'others',
    networkTimeoutSeconds: 10,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 32,
        maxAgeSeconds: 86400,
        purgeOnQuotaError: !0,
      }),
    ],
  }),
  'GET'
);

// Use a stale-while-revalidate strategy for all other requests.
setDefaultHandler(new StaleWhileRevalidate());

// @ts-ignore
// eslint-disable-next-line
self.addEventListener('message', async (event) => {
  if (event.data && event.data.action === 'CACHE_NEW_ROUTE') {
    caches.open('others').then((cache) =>
      // @ts-ignore
      cache.match(event.source.url).then((res) => {
        if (res === undefined) {
          // @ts-ignore
          return cache.add(event.source.url);
        }
      })
    );
  }
});
