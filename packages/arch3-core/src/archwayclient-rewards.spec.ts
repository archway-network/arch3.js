import { Long } from '@archwayhq/arch3-proto/src/codegen/helpers';

import { ArchwayClient } from './archwayclient';

const rpcUrl = 'https://rpc.constantine-1.archway.tech';
const airdropContract = 'archway16fpjs4u9pq7px3h3zaawegtfp63dnerm83rjywjn7j9t8g0vtu9qhvgvsr';
const rewardsAddress = 'archway1u4rmd5z78smu0tmtw45mran0pz4umzvxaf3g56';
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

  it('check outstanding rewards are coming back', async () => {
    await ArchwayClient.connect(rpcUrl);

    const response = await ArchwayClient.getOutstandingRewards({
      rewardsAddress
    });

    expect(typeof Number(response.totalRewards[0].amount)).toBe('number');
  });

  it('check params are coming back', async () => {
    await ArchwayClient.connect(rpcUrl);

    const response = await ArchwayClient.getParams(undefined);

    expect(response.params).toBeDefined();
  });

  it('check pool are coming back', async () => {
    await ArchwayClient.connect(rpcUrl);

    const response = await ArchwayClient.getPool(undefined);

    expect(response.undistributedFunds).toBeDefined();
  });

  it('check rewards records are coming back', async () => {
    await ArchwayClient.connect(rpcUrl);

    const response = await ArchwayClient.getRewardsRecords({
      rewardsAddress
    });

    expect(response.records.length).toBeGreaterThan(0);
  });

  it('check flat fee are coming back', async () => {
    await ArchwayClient.connect(rpcUrl);

    const response = await ArchwayClient.getFlatFee({
      contractAddress: airdropContract
    });

    expect(typeof Number(response.flatFeeAmount)).toBe('number');
  });
});