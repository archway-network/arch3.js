import { ArchwayClient } from './archwayclient';

const rpcUrl = 'https://rpc.constantine-1.archway.tech';
const airdropContract = 'archway16fpjs4u9pq7px3h3zaawegtfp63dnerm83rjywjn7j9t8g0vtu9qhvgvsr';

describe('Archway Rewards', () => {
  it('check block rewards is coming back', async () => {
    await ArchwayClient.connect(rpcUrl);

    const response = await ArchwayClient.getBlockRewardsTracking(undefined);

    expect(response.block).toBeDefined();
  });

  it('check contract metadata is coming back', async () => {
    await ArchwayClient.connect(rpcUrl);

    const response = await ArchwayClient.getContractMetadata({
      contractAddress: airdropContract
    });

    // note: some contracts have no metadata defined
    expect(response === undefined || response.metadata).toBe(true);
  });
});