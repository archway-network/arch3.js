# arch3.js

[![npm (scoped)](https://img.shields.io/npm/v/archwayhq/arch3.js)](https://www.npmjs.com/package/@archwayhq/arch3.js) ![Tests](https://github.com/archway-network/arch3.js/actions/workflows/test.yml/badge.svg) ![CodeQL](https://github.com/archway-network/arch3.js/actions/workflows/codeql.yml/badge.svg) [![License](https://img.shields.io/github/license/archway-network/arch3.js?label=License&logo=opensourceinitiative&logoColor=white&color=informational)](https://opensource.org/licenses/Apache-2.0)

`arch3.js` is an all-in-one library to interact with the Archway Protocol. It works as a drop-in replacement of [CosmJS](https://github.com/cosmos/cosmjs) clients, extending its functionalities to connect with Archway's reward system.

## Installation

### NPM

```sh
npm install --save @archwayhq/arch3.js
```

### Yarn

```sh
yarn add @archwayhq/arch3.js
```

## Sample Usage

Both examples suppose you deployed the [increment](https://github.com/archway-network/archway-templates/tree/f5860a7/increment) contract template to Constantine.

### Querying

```typescript
import { ArchwayClient } from '@archwayhq/arch3.js';

const client = await ArchwayClient.connect('https://rpc.constantine-1.archway.tech');

const contractAddress = 'archway14v952t75xgnufzlrft52ekltt8nsu9gxqh4xz55qfm6wqslc0spqspc5lm';
const msg = {
  get_count: {},
};
const { count } = await client.queryContractSmart(
  contractAddress,
  msg
);
```

### Executing a transaction

```typescript
import { SigningArchwayClient } from '@archwayhq/arch3.js';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

const network = {
  chainId: 'constantine-1',
  endpoint: 'https://rpc.constantine-1.archway.tech',
  prefix: 'archway',
};

const alice = {
  // This is an incomplete mnemonic used for demo purposes only. Please, never hard code your seed phrases.
  mnemonic: 'culture blossom ten thing bar ...',
  address0: 'archway1cw3vd33zxyy5jk38azn3l8ytw53dwh8h73jugf',
};

const wallet = await DirectSecp256k1HdWallet.fromMnemonic(alice.mnemonic, { prefix: network.prefix });
const client = await SigningArchwayClient.connectWithSigner(network.endpoint, wallet, {
  ...defaultSigningClientOptions,
  prefix: network.prefix,
});

const contractAddress = 'archway14v952t75xgnufzlrft52ekltt8nsu9gxqh4xz55qfm6wqslc0spqspc5lm';
const msg = {
  increment: {},
};
const { transactionHash } = await client.execute(
  alice.address0,
  contractAddress,
  msg,
  'auto'
);
```

## Development

See [HACKING.md](./HACKING.md).

## License

This project is licensed under the Apache-2.0 License - see the [LICENSE](./LICENSE) file for details.
