import { ArchwayClient } from './archwayclient';

const rpcUrl = 'https://rpc.constantine-1.archway.tech';
const airdropContract = 'archway16fpjs4u9pq7px3h3zaawegtfp63dnerm83rjywjn7j9t8g0vtu9qhvgvsr';

describe('Archway Rewards', () => {
  it('check block rewards is coming back', async () => {
    await ArchwayClient.connect(rpcUrl);

    const response = await ArchwayClient.getBlockRewardsTracking({});

    expect(response.block).toBeDefined();
  });

  it('check contract metadata is coming back', async () => {
    await ArchwayClient.connect(rpcUrl);

    const response = await ArchwayClient.getContractMetadata({
      contractAddress: airdropContract
    });

    expect(response.metadata).toMatchObject({
      contractAddress: "archway16fpjs4u9pq7px3h3zaawegtfp63dnerm83rjywjn7j9t8g0vtu9qhvgvsr",
      ownerAddress: "archway1u4rmd5z78smu0tmtw45mran0pz4umzvxaf3g56",
      rewardsAddress: "archway1u4rmd5z78smu0tmtw45mran0pz4umzvxaf3g56"
    });
  });
});
