# arch3.js

[![npm (scoped)](https://img.shields.io/npm/v/@archwayhq/arch3.js)](https://www.npmjs.com/package/@archwayhq/arch3.js) ![Tests](https://github.com/archway-network/arch3.js/actions/workflows/test.yml/badge.svg) ![CodeQL](https://github.com/archway-network/arch3.js/actions/workflows/codeql.yml/badge.svg) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/a7e14bcdf8c742f590395fbd4679cae5)](https://app.codacy.com/gh/archway-network/arch3.js/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade) [![Codacy Badge](https://app.codacy.com/project/badge/Coverage/a7e14bcdf8c742f590395fbd4679cae5)](https://app.codacy.com/gh/archway-network/arch3.js/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_coverage) [![License](https://img.shields.io/github/license/archway-network/arch3.js?label=License&logo=opensourceinitiative&logoColor=white&color=informational)](https://opensource.org/licenses/Apache-2.0)

`arch3.js` is an all-in-one library to interact with the Archway Protocol. It extends [CosmJS](https://github.com/cosmos/cosmjs) CosmWasm Stargate clients' functionalities to connect with Archway's reward system. It automatically calculates the network's [minimum consensus fee](https://github.com/archway-network/archway/tree/main/x/rewards/spec#minimum-consensus-fee) and [contract premiums](https://github.com/archway-network/archway/tree/main/x/rewards/spec#contract-flat-fee) before broadcasting transactions to the chain.

This package **is not** a replacement for CosmJS and is intended to work in conjunction with the other modules available in `@cosmjs/*`.

## Installation

### NPM

```sh
npm install --save @archwayhq/arch3.js
```

### Yarn

```sh
yarn add @archwayhq/arch3.js
```

## Documentation

For a complete reference on the classes and methods available, please check the [API docs](https://archway-network.github.io/arch3.js).

## Compatibility table

List of Archway [protocol versions](https://github.com/archway-network/archway/releases) compatible with `arch3.js`:

|  archwayd  |  arch3.js  |
|:----------:|:----------:|
|  `>=0.5.0` |  `>=0.2.0` |
|  `<0.5.0`  |   `0.1.0`  |

To query the current version of a node, you can run:

```sh
curl -sfL 'https://rpc.constantine.archway.tech/abci_info' | jq -r '.result.response.version'
```

## Sample Usage

The examples suppose you deployed the [increment](https://github.com/archway-network/archway-templates/tree/caaa5ef/increment) contract template to Constantine.

You can also take a look on the [test specs](https://github.com/archway-network/arch3.js/tree/main/packages/arch3-core/src) for more examples on how to use each of the methods available in the clients.

### Query

For quering the chain, use the `ArchwayClient`:

```typescript
import { ArchwayClient } from '@archwayhq/arch3.js';

const endpoint = 'https://rpc.constantine-3.archway.tech';
const client = await ArchwayClient.connect(endpoint);
```

#### Querying a contract

```typescript
const contractAddress = 'archway14v952t75xgnufzlrft52ekltt8nsu9gxqh4xz55qfm6wqslc0spqspc5lm';
const msg = {
  get_count: {},
};
const { count } = await client.queryContractSmart(contractAddress, msg);
```

#### Querying outstanding rewards

```typescript
const rewardsAddress = 'archway14v952t75xgnufzlrft52ekltt8nsu9gxqh4xz55qfm6wqslc0spqspc5lm';
const { totalRewards, totalRecords } = await client.getOutstandingRewards(aliceAddress);
```

### Execute transactions

For signing and broadcasting transactions, create a `SigningArchwayClient` using a signing wallet:

```typescript
import { SigningArchwayClient } from '@archwayhq/arch3.js';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

const network = {
  endpoint: 'https://rpc.constantine-3.archway.tech',
  prefix: 'archway',
};

const walletMnemonic = 'culture blossom ten thing bar ...';

const wallet = await DirectSecp256k1HdWallet.fromMnemonic(walletMnemonic, { prefix: network.prefix });
const client = await SigningArchwayClient.connectWithSigner(network.endpoint, wallet);
```

#### Executing an action in a smart contract

```typescript
const accounts = await wallet.getAccounts();
const contractAddress = 'archway14v952t75xgnufzlrft52ekltt8nsu9gxqh4xz55qfm6wqslc0spqspc5lm';
const msg = {
  increment: {},
};

const { transactionHash } = await client.execute(accounts[0].address, contractAddress, msg, 'auto');
```

#### Setting a contract metadata

```typescript
const accounts = await wallet.getAccounts();
const metadata = {
  contractAddress: 'archway14v952t75xgnufzlrft52ekltt8nsu9gxqh4xz55qfm6wqslc0spqspc5lm',
  ownerAddress: accounts[0].address,
  rewardsAddress: accounts[0].address,
};

const { transactionHash } = await client.setContractMetadata(accounts[0].address, metadata, 'auto');
```

#### Withdrawing rewards

```typescript
const accounts = await wallet.getAccounts();
const contractAddress = 'archway14v952t75xgnufzlrft52ekltt8nsu9gxqh4xz55qfm6wqslc0spqspc5lm';

// The address withdrawing the rewards should be the same
// as the `rewardsAddress` set in the contract metadata
const {
  transactionHash,
  rewards
} = await client.withdrawContractRewards(accounts[0].address, contractAddress, msg, 'auto');
```

## Development

See [HACKING.md](https://github.com/archway-network/arch3.js/blob/main/HACKING.md).

## License

This project is licensed under the Apache-2.0 License - see the [LICENSE](https://github.com/archway-network/arch3.js/blob/main/LICENSE) file for details.
