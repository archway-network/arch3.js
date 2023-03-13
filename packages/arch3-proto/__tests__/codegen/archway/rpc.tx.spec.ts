import { archway } from '../../../src/codegen';
import { createRPCMsgClient } from '../../../src/codegen/archway/rpc.tx';

import {
  MsgSetContractMetadata,
  Contra
} from '../../../src/codegen/archway/rewards/v1beta1/tx';
import { QueryClient, createProtobufRpcClient } from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import {
  CONSTANTINE_1_DEVX_TEST_ACCOUNT,
  CONSTANTINE_AIRDROP_CONTRACT,
  RPC_ENDPOINT
} from '../../fixtures';

type RpcTxClient = Awaited<ReturnType<typeof createRPCMsgClient>>;

let client: RpcTxClient | undefined;
beforeAll(async () => {
  const { createRPCMsgClient } = archway.ClientFactory;
  const tmClient = await Tendermint34Client.connect(RPC_ENDPOINT);
  const queryClient = new QueryClient(tmClient);
  const rpc = createProtobufRpcClient(queryClient);
  client = await createRPCMsgClient({ rpc });
});

describe('Test rpc query', () => {
  it('gets balances correctly', async () => {
    const balances = await client?.archway.rewards.v1beta1.setContractMetadata({
      senderAddress: CONSTANTINE_1_DEVX_TEST_ACCOUNT,
      metadata: {
        contractAddress: CONSTANTINE_AIRDROP_CONTRACT,
        ownerAddress: CONSTANTINE_1_DEVX_TEST_ACCOUNT,
        rewardsAddress: ''
      }
    });
  });
});
