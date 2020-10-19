# build arguments
ARG BUILD_VERSION=0.0.1
ARG BUILD_DATE
ARG VCS_REF
#docker build --no-cache --target release --build-arg BUILD_DATE=$(date -u +'%Y-%m-%dT%H:%M:%SZ') -t naviter/scrapper-image:latest .

# base
FROM node:12.18.0-stretch-slim as node
RUN apt-get update
USER node

ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init && \
  mkdir /project && chown node:node /project && \
  mkdir /app && chown node:node /app

FROM node as basedev
WORKDIR /project
USER node
COPY package.json yarn.lock ./
RUN yarn install

# builder
FROM basedev AS builder
WORKDIR /project
COPY . .
RUN yarn compile

FROM node AS baseprod
WORKDIR /app
USER node
COPY package.json yarn.lock ./
RUN yarn install --production

# release
FROM baseprod AS release
WORKDIR /app
USER node
# COPY --from=baseprod /app/node_modules ./node_modules
# COPY --from=builder /project/config ./config
COPY --from=builder /project/lib ./lib
COPY --from=builder /project/public ./public

LABEL org.label-schema.schema-version="1.0"
LABEL org.label-schema.build-date=$BUILD_DATE
LABEL org.label-schema.name="naviter/xcliga"
LABEL org.label-schema.description="naviter xcliga"
LABEL org.label-schema.url="https://naviter.com/"
LABEL org.label-schema.vcs-url="https://github.com/naviter/xcliga"
LABEL org.label-schema.vcs-ref=$VCS_REF
LABEL maintainer="primoz.susa@naviter.com"
LABEL org.label-schema.vendor="Naviter"
LABEL org.label-schema.version=$BUILD_VERSION
LABEL org.label-schema.docker.cmd="docker run -d -p 3030:3030 naviter/xcliga:latest"

EXPOSE 3030
ENTRYPOINT ["dumb-init", "--"]
ENV NODE_ENV=production
CMD ["node", "lib", "index.js"]
