import { Tendermint37Client, RpcClient, Comet38Client, Tendermint34Client, CometClient } from '@cosmjs/tendermint-rpc';

/**
 * Auto-detects Tendermint/CometBFT 0.34/0.37/0.38 version for connecting to an RPC Client.
 *
 * @param rpcClient - Instance of {@link RpcClient} to connect to.
 * @returns Suitable client version of {@link CometClient}.
 */
export async function connectToRpcClient(rpcClient: RpcClient): Promise<CometClient> {
  const tendermint37Client = await Tendermint37Client.create(rpcClient);
  const version = (await tendermint37Client.status()).nodeInfo.version;

  // HACK: Force Tendermint37Client on 0.38.x versions, remove when client batching issue is fixed
  if (version.startsWith('0.37.') || version.startsWith('0.38.')) {
    return tendermint37Client;
  }

  tendermint37Client.disconnect();

  // if (version.startsWith('0.38.')) {
  //   console.log('VERRRRR2222',version)
  //   return await Comet38Client.create(rpcClient);
  // }

  return await Tendermint34Client.create(rpcClient);
}
