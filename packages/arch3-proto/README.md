# arch3-proto

# main script
- src/codeGenRunner.js is core file that does the codegen work
- the path to proto files is set in protoDirs
- note as the proto files change the codeGenRunner configs may need to change for a correct gen to happen
- note any imports of a proto file MUST be included into the workspace proto folder
    - for example proto/archway/rewards/v1beta1/events.proto does an import of gogoproto/gogo.proto, so this file was added into proto/gogoproto/gogo.proto
    - use the scripts/import-proto-and-deps.sh script to get both all protos and their dependencies

# scripts
- arch:dev:gen and arch:prod:gen generate the ts codegen files in root of src folder
    - make certain all proto files and their imports exist already in proto folder
- arch:ts can then be run after to generate the d.ts typescript files inside of the types folder
- arch:main and arch:module will generate the codegen files as raw js


<p align="center">
    Typescript protobuf client generator
</p>


## Table of contents

- [arch3-proto](#arch3-proto)
  - [Install](#install)
  - [Table of contents](#table-of-contents)
- [Usage](#usage)
    - [RPC Clients](#rpc-clients)
    - [Composing Messages](#composing-messages)
        - Cosmos, CosmWasm, and IBC
            - [CosmWasm](#cosmwasm-messages)
            - [IBC](#ibc-messages)
            - [Cosmos](#cosmos-messages)
- [Wallets and Signers](#connecting-with-wallets-and-signing-messages)
    - [Stargate Client](#initializing-the-stargate-client)
    - [Creating Signers](#creating-signers)
    - [Broadcasting Messages](#broadcasting-messages)
- [Advanced Usage](#advanced-usage)
- [Developing](#developing)
- [Credits](#credits)

## Usage
### RPC Clients

```js
import { archway } from 'arch3-proto';

const { createRPCQueryClient } = archway.ClientFactory; 
const client = await createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT });

// now you can query the cosmos modules
const balance = await client.cosmos.bank.v1beta1
    .allBalances({ address: 'archway1addresshere' });

// you can also query the archway modules
const balances = await client.archway.exchange.v1beta1
    .exchangeBalances()
```

### Composing Messages

Import the `archway` object from `arch3-proto`. 

```js
import { archway } from 'arch3-proto';

const {
    createSpotLimitOrder,
    createSpotMarketOrder,
    deposit
} = archway.exchange.v1beta1.MessageComposer.withTypeUrl;
```

#### CosmWasm Messages

```js
import { cosmwasm } from "arch3-proto";

const {
    clearAdmin,
    executeContract,
    instantiateContract,
    migrateContract,
    storeCode,
    updateAdmin
} = cosmwasm.wasm.v1.MessageComposer.withTypeUrl;
```

#### IBC Messages

```js
import { ibc } from 'arch3-proto';

const {
    transfer
} = ibc.applications.transfer.v1.MessageComposer.withTypeUrl
```

#### Cosmos Messages

```js
import { cosmos } from 'arch3-proto';

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

### Initializing the Stargate Client

Use `getSigningarchwayClient` to get your `SigningStargateClient`, with the proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

```js
import { getSigningarchwayClient } from 'arch3-proto';

const stargateClient = await getSigningarchwayClient({
  rpcEndpoint,
  signer // OfflineSigner
});
```
### Creating Signers

To broadcast messages, you can create signers with a variety of options:

* [keplr](https://docs.keplr.app/api/cosmjs.html)
* [cosmjs](https://gist.github.com/webmaster128/8444d42a7eceeda2544c8a59fbd7e1d9)

### Proto Signer

```js
import { getOfflineSignerProto as getOfflineSigner } from 'cosmjs-utils';
```

WARNING: NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS. Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

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
### Broadcasting Messages

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

const fee: StdFee = {
    amount: [
    {
        denom: 'coin',
        amount: '864'
    }
    ],
    gas: '86364'
};
const response = await stargateClient.signAndBroadcast(address, [msg], fee);
```

## Advanced Usage


If you want to manually construct a stargate client

```js
import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";

import { 
    cosmosAminoConverters,
    cosmosProtoRegistry,
    cosmwasmAminoConverters,
    cosmwasmProtoRegistry,
    ibcProtoRegistry,
    ibcAminoConverters,
    archwayAminoConverters,
    archwayProtoRegistry
} from 'arch3-proto';

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

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code or software using the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
