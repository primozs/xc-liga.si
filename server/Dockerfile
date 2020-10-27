FROM node:12.19.0-alpine3.12 AS node
RUN mkdir /app && chown node:node /app


FROM node AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn compile && rm -rf node_modules
RUN yarn install --production && \
  mkdir prod && \
  cp -r node_modules prod/node_modules && \
  cp -r lib prod/lib && \
  cp -r public prod/public


FROM node AS release
WORKDIR /app
USER node
COPY --from=builder /app/prod ./
EXPOSE 3030
ENV NODE_ENV=production
CMD ["node", "lib", "index.js"]
