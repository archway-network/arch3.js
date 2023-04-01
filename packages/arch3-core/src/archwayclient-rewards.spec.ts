/* eslint-disable */
import { Long } from '@archwayhq/arch3-proto/build/codegen/helpers';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { ArchwayClient, SigningArchwayClient } from './archwayclient';
import * as dotenv from "dotenv";
import { GasPrice } from '@cosmjs/stargate';

dotenv.config();

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

  it('check get flat fee is coming back', async () => {
    await ArchwayClient.connect(rpcLocal);
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(process.env.DEVX_MNEMONIC || "", {
      prefix: "archway",
    });
    const client = await SigningArchwayClient.connectWithSigner(
      "http://localhost:26657",
      wallet,
      { 
        broadcastPollIntervalMs: 300,
        broadcastTimeoutMs: 8_000,
        gasPrice: GasPrice.fromString(`500${denom}`), 
      }
    );

    await client.setFlatFee(
      "archway1rev2n7edzn6l84k37dhnhs0m9wqlveezvwjj38",
      contractAddress,
      denom,
      "10000"
    );

    const getResponse = await ArchwayClient.getFlatFee({
      contractAddress
    });

    expect(getResponse.flatFeeAmount).toBeTruthy();
  });
});