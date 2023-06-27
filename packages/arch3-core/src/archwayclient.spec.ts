import { coin } from '@cosmjs/amino';
import { Decimal } from '@cosmjs/math';

import { ArchwayClient } from '.';

const archwayd = {
  chainId: 'local-1',
  endpoint: 'http://localhost:26657',
  prefix: 'archway',
  denom: process.env.DENOM || 'aarch',
};

const contracts = {
  voter: {
    codeId: parseInt(process.env.VOTER_CONTRACT_CODE_ID || '1'),
    addresses: process.env.VOTER_CONTRACT_ADDRESSES?.split(' ') || []
  },
};
const contractAddress = contracts.voter.addresses[0];
const aliceAddress = 'archway1ecak50zhujddqd639xw4ejghnyrrc6jlwnlgwt';

describe('ArchwayClient', () => {
  describe('connect', () => {
    it('can be constructed', async () => {
      const client = await ArchwayClient.connect(archwayd.endpoint);
      expect(client).toBeDefined();
      client.disconnect();
    });
  });

  describe('connectWithBatchClient', () => {
    it('can be constructed', async () => {
      const client = await ArchwayClient.connectWithBatchClient(archwayd.endpoint);
      expect(client).toBeDefined();
      client.disconnect();
    });
  });

  describe('rewards', () => {
    it('gets the block rewards tracking', async () => {
      const client = await ArchwayClient.connect(archwayd.endpoint);
      const response = client.getBlockRewardsTracking();

      expect(response).toBeDefined();

      client.disconnect();
    });

    it('gets the contract metadata', async () => {
      const client = await ArchwayClient.connect(archwayd.endpoint);
      const response = await client.getContractMetadata(contractAddress);

      expect(response).toMatchObject({
        contractAddress,
        ownerAddress: aliceAddress,
        rewardsAddress: aliceAddress,
      });

      client.disconnect();
    });

    it('estimate fees without contract', async () => {
      const client = await ArchwayClient.connect(archwayd.endpoint);
      const response = await client.getEstimateTxFees();

      expect(response.gasUnitPrice).toMatchObject({
        denom: archwayd.denom,
        amount: expect.any(Decimal),
      });
      expect(response.contractAddress).toBeUndefined();
      expect(response.estimatedFee).toMatchObject({
        gas: '1',
        amount: expect.objectContaining([{
          denom: archwayd.denom,
          amount: expect.stringMatching(/^\d+$/),
        }])
      });

      client.disconnect();
    });

    it('estimate fees for a contract with premium enabled', async () => {
      const client = await ArchwayClient.connect(archwayd.endpoint);
      const response = await client.getEstimateTxFees(1, contractAddress);

      expect(response.gasUnitPrice).toMatchObject({
        denom: archwayd.denom,
        amount: expect.any(Decimal),
      });
      expect(response.contractAddress).toBe(contractAddress);
      expect(response.estimatedFee).toMatchObject({
        gas: '1',
        amount: expect.objectContaining([{
          denom: archwayd.denom,
          amount: expect.stringMatching(/^\d+$/),
        }])
      });

      client.disconnect();
    });

    it('check outstanding rewards are coming back', async () => {
      const client = await ArchwayClient.connect(archwayd.endpoint);
      const response = await client.getOutstandingRewards(aliceAddress);

      expect(response.rewardsAddress).toBe(aliceAddress);
      expect(response.totalRewards).not.toHaveLength(0);
      expect(response.totalRecords).toBeGreaterThan(0);

      client.disconnect();
    });

    it('check pool are coming back', async () => {
      const client = await ArchwayClient.connect(archwayd.endpoint);
      const response = await client.getRewardsPool();

      expect(response.treasuryFunds).toBeDefined();
      expect(response.undistributedFunds).toBeDefined();

      client.disconnect();
    });

    it('check rewards records are coming back', async () => {
      const client = await ArchwayClient.connect(archwayd.endpoint);
      const response = await client.getAllRewardsRecords(aliceAddress);

      expect(response).not.toHaveLength(0);

      client.disconnect();
    });

    it('check contract premium are coming back', async () => {
      const client = await ArchwayClient.connect(archwayd.endpoint);
      const response = await client.getContractPremium(contractAddress);

      expect(response.contractAddress).toBe(contractAddress);
      expect(response.flatFee).toMatchObject(coin(1000, archwayd.denom));

      client.disconnect();
    });

    it('check does not fail when contract premium is not set', async () => {
      const client = await ArchwayClient.connect(archwayd.endpoint);
      const response = await client.getContractPremium(contracts.voter.addresses[2]);

      expect(response.contractAddress).toBe(contracts.voter.addresses[2]);
      expect(response.flatFee).toBeUndefined();

      client.disconnect();
    });
  });
});
