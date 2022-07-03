import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';

export class ArchwayClient extends CosmWasmClient {
  protected constructor(tmClient: Tendermint34Client | undefined) {
    super(tmClient);
  }
}
