import {
  Comet38Client,
  CometClient,
  HttpEndpoint,
  HttpBatchClientOptions,
  HttpBatchClient,
  RpcClient,
  Tendermint37Client,
  Tendermint34Client,
} from '@cosmjs/tendermint-rpc';

/**
 * Auto-detects Tendermint/CometBFT 0.34/0.37/0.38 version for connecting to an RPC Client with an HttpBatchClient.
 *
 * @param endpoint - String URL of the RPC endpoint to connect or an {@link HttpEndpoint} object.
 * @param options - Optional configuration to control how the {@link HttpBatchClient} will batch requests.
 */
export async function connectCometWithBatchClient(
  endpoint: string | HttpEndpoint,
  options?: Partial<HttpBatchClientOptions>,
): Promise<CometClient> {
  let rpcClient: RpcClient = new HttpBatchClient(endpoint, options);
  const tendermint37Client = await Tendermint37Client.create(rpcClient);
  const version = (await tendermint37Client.status()).nodeInfo.version;

  if (version.startsWith('0.37.')) {
    return tendermint37Client;
  }

  tendermint37Client.disconnect();
  rpcClient.disconnect();

  rpcClient = new HttpBatchClient(endpoint, options);

  if (version.startsWith('0.38.')) {
    return await Comet38Client.create(rpcClient);
  }

  return await Tendermint34Client.create(rpcClient);
}
