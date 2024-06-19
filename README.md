# Unagi Frontend Test

## Requirements

* [Node.js](https://nodejs.org)
* [TypeScript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)

## Description

Unagi test app, project boilerplate is pretty legacy, so I just configured mandatory ts settings. From libraries I added only styled-components so you can see my actual development skills.

## Install

```bash
git clone <REPO_URL> 
```

### Install dependencies

npm:

```bash
npm install
```

yarn:

```bash
yarn
```

### Start app

```bash
npm start
```

yarn:

```bash
yarn start
```

### Start client

```bash
npm run start:front
```

yarn:

```bash
yarn start:front
```

### Start json web server

```bash
npm run start:back
```

yarn:

```bash
yarn start:back
```

### Docker

### Start client

If you want to start it separately

```bash
docker build -f Dockerfile.client -t client .
```

```bash
docker build -f Dockerfile.server -t json-webserver .
```

### With compose

```bash
docker-compose up
```