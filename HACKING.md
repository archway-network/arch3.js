# Hacking arch3.js

This document explains all you need to work on `arch3.js`, i.e. modify it. It is not intended for users of `arch3.js`.

## Prerequisite

- A UNIX-like development environment
- Node.js 16+ and [yarn](https://yarnpkg.com/getting-started/install)
- [Docker](https://docs.docker.com/get-docker/) for running the tests

> Linux users are advised to install Docker following the [rootless mode](https://docs.docker.com/engine/security/rootless/) instructions.

## Installation

1. Install dependencies: `yarn install`
2. Install SDKs (to make IDE integration work): `yarn dlx @yarnpkg/sdks`

## Running tests

The unit tests depends on a running local chain. To configure it, start the local chain using the setup script that creates all required wallets and contracts:

```sh
./scripts/start-local-node.sh
```

After the chain is up, run the tests in all packages using:

```sh
yarn test:all
```

To run tests for a single package, do:

```sh
yarn workspace @archwayhq/arch3-core test
```

## Code Style

After you modified a file, check if the linter is happy:

```sh
yarn lint:all

# or if you want linting plus automatic fixing
yarn lint:all:fix
```
