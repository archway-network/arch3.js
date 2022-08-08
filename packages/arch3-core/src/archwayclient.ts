import { CosmWasmClient, SigningCosmWasmClient, SigningCosmWasmClientOptions } from '@cosmjs/cosmwasm-stargate';
import { OfflineSigner } from "@cosmjs/proto-signing";
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';

export class ArchwayClient extends CosmWasmClient {
  protected constructor(tmClient: Tendermint34Client | undefined) {
    super(tmClient);
  }
}

export class SigningArchwayClient extends SigningCosmWasmClient {
  protected constructor(tmClient: Tendermint34Client | undefined, signer: OfflineSigner, options: SigningCosmWasmClientOptions | undefined) {
    super(tmClient, signer, options);
  }
}
