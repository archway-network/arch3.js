# Hacking arch3.js

This document explains all you need to work on `arch3.js`, i.e. modify it. It is not intended for users of `arch3.js`.

## Prerequisite

- A UNIX-like development environment
- Node.js 14+ and [yarn](https://yarnpkg.com/getting-started/install)

## Installation

1. Install dependencies: `yarn install`
2. Install SDKs (to make IDE integration work): `yarn dlx @yarnpkg/sdks`

## Running tests

For unit tests that don't connect to any blockchain, just do:

```sh
yarn test
```

## Code Style

After you modified a file, check if the linter is happy:

```sh
yarn lint

# or if you want linting plus automatic fixing
yarn lint:fix
```
