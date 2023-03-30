/* eslint-disable */
import { Long } from '@archwayhq/arch3-proto/build/codegen/helpers';
import { ArchwayClient } from './archwayclient';

const rpcLocal = "http://localhost:26657";
const contractAddress = 'archway14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sy85n2u';

const rewardsAddress = 'archway1rev2n7edzn6l84k37dhnhs0m9wqlveezvwjj38';
const denom = 'uarch';

describe('Archway Rewards', () => {
  it('check block rewards is coming back', async () => {
    await ArchwayClient.connect(rpcLocal);

    const response = await ArchwayClient.getBlockRewardsTracking(undefined);

    expect(response.block).toBeDefined();
  });

  it('check contract metadata is coming back', async () => {
    await ArchwayClient.connect(rpcLocal);

    const response = await ArchwayClient.getContractMetadata({
      contractAddress
    });

    // note: some contracts have no metadata defined
    expect(response === undefined || response.metadata).toBeTruthy();
  });

  it('check estimate fees is coming back', async () => {
    await ArchwayClient.connect(rpcLocal);

    const response = await ArchwayClient.getEstimateFees({
      gasLimit: new Long(100000),
      contractAddress
    });

    expect(response.estimatedFee[0].denom).toBe(denom);
    expect(typeof Number(response.estimatedFee[0].amount)).toBe('number');
    expect(response.gasUnitPrice?.denom).toBe(denom);
    expect(typeof Number(response.gasUnitPrice?.amount)).toBe('number');
  });

  it('check outstanding rewards are coming back', async () => {
    await ArchwayClient.connect(rpcLocal);

    const response = await ArchwayClient.getOutstandingRewards({
      rewardsAddress
    });

    expect(typeof Number(response.totalRewards)).toBeTruthy();
  });

  it('check params are coming back', async () => {
    await ArchwayClient.connect(rpcLocal);

    const response = await ArchwayClient.getParams(undefined);

    expect(response.params).toBeDefined();
  });

  it('check pool are coming back', async () => {
    await ArchwayClient.connect(rpcLocal);

    const response = await ArchwayClient.getPool(undefined);

    expect(response.undistributedFunds).toBeDefined();
  });

});