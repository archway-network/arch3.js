import { CosmWasmClient, HttpEndpoint, SigningCosmWasmClient, SigningCosmWasmClientOptions } from '@cosmjs/cosmwasm-stargate';
import { OfflineSigner } from "@cosmjs/proto-signing";
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';

export class ArchwayClient extends CosmWasmClient {
  protected constructor(tmClient: Tendermint34Client | undefined) {
    super(tmClient);
  }

  public static override async connect(endpoint: string | HttpEndpoint): Promise<ArchwayClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new ArchwayClient(tmClient);
  }
}

export class SigningArchwayClient extends SigningCosmWasmClient {
  protected constructor(tmClient: Tendermint34Client | undefined, signer: OfflineSigner, options: SigningCosmWasmClientOptions | undefined) {
    super(tmClient, signer, options);
  }

  public static override async connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner,
    options: SigningCosmWasmClientOptions = {},
  ): Promise<SigningArchwayClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new SigningArchwayClient(tmClient, signer, options);
  }

  public static override async offline(
    signer: OfflineSigner,
    options: SigningCosmWasmClientOptions = {},
  ): Promise<SigningArchwayClient> {
    return new SigningArchwayClient(undefined, signer, options);
  }
}
