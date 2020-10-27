FROM node:14.14.0-alpine3.10 AS node
RUN mkdir /app && chown node:node /app


FROM node AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build && rm -rf node_modules
RUN yarn install --production && mkdir prod && \
  cp -r node_modules prod/node_modules && \
  cp -r .next prod/.next && \
  cp -r public prod/public && \
  cp next.config.js prod/next.config.js


FROM node AS release
WORKDIR /app
USER node
COPY --from=builder /app/prod ./
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node_modules/next/dist/bin/next", "start"]
