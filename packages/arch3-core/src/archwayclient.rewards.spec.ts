import { ArchwayClient } from './archwayclient';

describe('Archway Rewards', () => {
  it('check block rewards is coming back', async () => {
    await ArchwayClient.connect('https://rpc.constantine-1.archway.tech');

    const response = await ArchwayClient.getBlockRewardsTracking(undefined);

    expect(response.block).toBeDefined();
  });
});