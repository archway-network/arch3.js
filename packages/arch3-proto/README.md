# @archwayhq/arch3-proto

[![npm (scoped)](https://img.shields.io/npm/v/@archwayhq/arch3-proto)](https://www.npmjs.com/package/@archwayhq/arch3-proto) [![License](https://img.shields.io/github/license/archway-network/arch3.js?label=License&logo=opensourceinitiative&logoColor=white&color=informational)](https://opensource.org/licenses/Apache-2.0)

## Installation

### NPM

```sh
npm install --save @archwayhq/arch3-proto
```

### Yarn

```sh
yarn add @archwayhq/arch3-proto
```

## Main script

- `./scripts/codegen.js` is the core file that does the codegen work
- the path to proto files is set in `protoDirs`
- note as the proto files change the codeGenRunner configs may need to change for a correct gen to happen
- note any imports of a proto file MUST be included into the package's `proto` folder
  - for example, `./proto/archway/rewards/v1beta1/events.proto` does an import of `gogoproto/gogo.proto`, so this file was added into `proto/gogoproto/gogo.proto`
  - use the `<workspace-root>/scripts/import-proto.sh` script to get both the protocol's protos and their dependencies

## Scripts

- `codegen` generate the ts codegen files in the `./generated` folder
- `build` can then be run after to compile the Typescript files

## Testing

- When testing you must first have the generated code, use `yarn code` and `yarn build`.

## Usage

### RPC Clients

```js
import { archway } from '@archwayhq/arch3-proto' ;

const { createRPCQueryClient } = archway.ClientFactory;
const client = await createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT });

// now you can query the cosmos modules
const balance = await client.cosmos.bank.v1beta1
    .allBalances({ address: 'archway1addresshere' });

// you can also query the archway modules
const balances = await client.archway.exchange.v1beta1
    .exchangeBalances()
```

#### Composing Messages

Import the `archway` object from `arch3-proto`.

```js
import { archway } from '@archwayhq/arch3-proto' ;

const {
    createSpotLimitOrder,
    createSpotMarketOrder,
    deposit
} = archway.exchange.v1beta1.MessageComposer.withTypeUrl;
```

##### CosmWasm Messages

```js
import { cosmwasm } from '@archwayhq/arch3-proto';

const {
    clearAdmin,
    executeContract,
    instantiateContract,
    migrateContract,
    storeCode,
    updateAdmin
} = cosmwasm.wasm.v1.MessageComposer.withTypeUrl;
```

##### IBC Messages

```js
import { ibc } from '@archwayhq/arch3-proto' ;

const {
    transfer
} = ibc.applications.transfer.v1.MessageComposer.withTypeUrl
```

##### Cosmos Messages

```js
import { cosmos } from '@archwayhq/arch3-proto' ;

const {
    fundCommunityPool,
    setWithdrawAddress,
    withdrawDelegatorReward,
    withdrawValidatorCommission
} = cosmos.distribution.v1beta1.MessageComposer.fromPartial;

const {
    multiSend,
    send
} = cosmos.bank.v1beta1.MessageComposer.fromPartial;

const {
    beginRedelegate,
    createValidator,
    delegate,
    editValidator,
    undelegate
} = cosmos.staking.v1beta1.MessageComposer.fromPartial;

const {
    deposit,
    submitProposal,
    vote,
    voteWeighted
} = cosmos.gov.v1beta1.MessageComposer.fromPartial;
```

#### Initializing the Stargate Client

Use `getSigningarchwayClient` to get your `SigningStargateClient`, with the proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

```js
import { getSigningarchwayClient } from '@archwayhq/arch3-proto' ;

const stargateClient = await getSigningarchwayClient({
  rpcEndpoint,
  signer // OfflineSigner
});
```

#### Creating Signers

To broadcast messages, you can create signers with a variety of options:

- [keplr](https://docs.keplr.app/api/cosmjs.html)
- [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)

#### Proto Signer

```js
import { getOfflineSignerProto as getOfflineSigner } from 'cosmjs-utils';
```

> :warn: DO NOT USE PLAIN-TEXT MNEMONICS. Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

```js
import { chains } from 'chain-registry';

const mnemonic =
  'unfold client turtle either pilot stock floor glow toward bullet car science';
  const chain = chains.find(({ chain_name }) => chain_name === 'archway');
  const signer = await getOfflineSigner({
    mnemonic,
    chain
  });
```

#### Broadcasting Messages

Now that you have your `stargateClient`, you can broadcast messages:

```js
const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

const msg = send({
    amount: [
    {
        denom: 'coin',
        amount: '1000'
    }
    ],
    toAddress: address,
    fromAddress: address
});

const response = await stargateClient.signAndBroadcast(address, [msg], 'auto');
```

### Advanced Usage

If you want to manually construct a stargate client

```js
import { OfflineSigner, GeneratedType, Registry } from '@cosmjs/proto-signing';
import { AminoTypes, SigningStargateClient } from '@cosmjs/stargate';

import {
    cosmosAminoConverters,
    cosmosProtoRegistry,
    cosmwasmAminoConverters,
    cosmwasmProtoRegistry,
    ibcProtoRegistry,
    ibcAminoConverters,
    archwayAminoConverters,
    archwayProtoRegistry
} from '@archwayhq/arch3-proto' ;

const signer: OfflineSigner = /* create your signer (see above)  */
const rpcEndpint = 'https://rpc.cosmos.directory/archway'; // or another URL

const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
    ...cosmosProtoRegistry,
    ...cosmwasmProtoRegistry,
    ...ibcProtoRegistry,
    ...archwayProtoRegistry
];

const aminoConverters = {
    ...cosmosAminoConverters,
    ...cosmwasmAminoConverters,
    ...ibcAminoConverters,
    ...archwayAminoConverters
};

const registry = new Registry(protoRegistry);
const aminoTypes = new AminoTypes(aminoConverters);

const stargateClient = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
});
```

## License

This project is licensed under the Apache-2.0 License - see the [LICENSE](https://github.com/archway-network/arch3.js/blob/main/packages/arch3-proto/LICENSE) file for details.
