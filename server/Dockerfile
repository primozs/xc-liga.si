FROM node:16.13.1-alpine3.13 AS node
RUN mkdir /app && chown -R node:node /app

FROM node as deps
USER node
WORKDIR /app
COPY --chown=node package.json yarn.lock ./
RUN yarn install

FROM node AS proddeps
USER node
WORKDIR /app
COPY --chown=node package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile

FROM node AS builder
USER node
WORKDIR /app
COPY . .
COPY --chown=node --from=deps /app/node_modules ./node_modules
RUN yarn compile && mkdir data && mkdir logs

FROM node AS release
USER node
WORKDIR /app
COPY --chown=node --from=builder /app/lib ./lib
COPY --chown=node --from=builder /app/public ./public
COPY --chown=node --from=proddeps /app/node_modules ./node_modules
COPY --chown=node --from=builder /app/data ./data
COPY --chown=node --from=builder /app/logs ./logs
VOLUME ["/app/data", "/app/logs"]
EXPOSE 3030
ENV NODE_ENV=production
CMD ["node", "lib", "index.js"]
