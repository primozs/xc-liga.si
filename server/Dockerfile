FROM node:16.13.1-alpine3.13 AS node
RUN mkdir /app && chown -R node:node /app

FROM node as deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

FROM node AS proddeps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile

FROM node AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn compile

FROM node AS release
WORKDIR /app
COPY --from=builder /app/lib ./lib
COPY --from=builder /app/public ./public
COPY --from=proddeps /app/node_modules ./node_modules
USER node
EXPOSE 3030
ENV NODE_ENV=production
CMD ["node", "lib", "index.js"]
