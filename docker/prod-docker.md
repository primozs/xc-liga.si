# Docker production

### 1. Build image

```
yarn docker:build
```

or

```
$ cd project dir
$ docker build --no-cache --target release --build-arg BUILD_DATE=$(date -u +'%Y-%m-%dT%H:%M:%SZ') -t xcliga:1.0 .
```

### 2. Setup prod docker requirements

```
# copy config folder
yarn docker:prod:setup
```

- setup .env look at .env.example

### 3. Start container

```
cd docker_prod
docker-compose up
```
