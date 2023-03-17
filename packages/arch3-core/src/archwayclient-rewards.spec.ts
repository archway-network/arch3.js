import { Long } from '@archwayhq/arch3-proto/src/codegen/helpers';

import { ArchwayClient } from './archwayclient';

const rpcUrl = 'https://rpc.constantine-1.archway.tech';
const airdropContract = 'archway16fpjs4u9pq7px3h3zaawegtfp63dnerm83rjywjn7j9t8g0vtu9qhvgvsr';
const denom = 'uconst';

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

  it('check estimate fees is coming back', async () => {
    await ArchwayClient.connect(rpcUrl);

    const response = await ArchwayClient.getEstimateFees({
      gasLimit: new Long(100000),
      contractAddress: airdropContract
    });

    // note: some contracts have no metadata defined
    expect(response.estimatedFee[0].denom).toBe(denom);
    expect(typeof Number(response.estimatedFee[0].amount)).toBe('number');
    expect(response.gasUnitPrice?.denom).toBe(denom);
    expect(typeof Number(response.gasUnitPrice?.amount)).toBe('number');
  });
});