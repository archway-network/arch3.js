import { Long } from '@archwayhq/arch3-proto/build/codegen/helpers';
import * as dotenv from "dotenv";

import { ArchwayClient } from './archwayclient';
import { alice, contractAddress, denom, wasmd } from "./fixtures";


const rpcLocal = wasmd.endpoint;

describe('Archway Rewards', () => {
  /* eslint-disable */
  beforeAll(() => {
    dotenv.config();
  });

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

    expect(response.metadata).toBeTruthy();
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
      rewardsAddress: alice.address0
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