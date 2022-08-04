import { CosmWasmClient, SigningCosmWasmClient, SigningCosmWasmClientOptions} from '@cosmjs/cosmwasm-stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import {OfflineSigner } from "@cosmjs/proto-signing";

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
