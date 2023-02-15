import { archway } from '../../../src/codegen';
import { createRPCQueryClient } from '../../../src/codegen/archway/rpc.query';
import { CONSTANTINE_1_DEVX_TEST_ACCOUNT, RPC_ENDPOINT } from '../../fixtures';

type RpcQueryClient = Awaited<ReturnType<typeof createRPCQueryClient>>;

let client: RpcQueryClient | undefined;
beforeAll(async () => {
  const { createRPCQueryClient } = archway.ClientFactory;
  client = await createRPCQueryClient({ rpcEndpoint: RPC_ENDPOINT });
});

describe('Test rpc query', () => {
  it('gets balances correctly', async () => {
    const balances = await client?.cosmos.bank.v1beta1.allBalances({
      address: CONSTANTINE_1_DEVX_TEST_ACCOUNT
    });
    expect(balances?.balances[0].denom).toBe('uconst');
    expect(Number(balances?.balances[0].amount)).toBeGreaterThan(0);
  });
});
