import { ArchwayClient } from './archwayclient';

const archwayd = {
  chainId: 'local-1',
  endpoint: 'http://localhost:26657',
  prefix: 'archway',
  denom: 'uarch',
};

const contractAddress = 'archway1ry0fa2zdu46gu5v9r0lx5x7klmued4hz8lcekzdf6yutllxvhd4sqh452d';
const aliceAddress = 'archway1ecak50zhujddqd639xw4ejghnyrrc6jlwnlgwt';

describe('ArchwayClient', () => {
  describe('connect', () => {
    it('can be constructed', async () => {
      const client = await ArchwayClient.connect(archwayd.endpoint);
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
      const response = await client.getEstimateTxFees(1);

      expect(response.gasLimit).toBeGreaterThan(0);
      expect(response.gasUnitPrice).toMatchObject({
        denom: archwayd.denom,
        amount: expect.stringMatching(/\d+/),
      });
      expect(response.contractAddress).toBeUndefined();
      expect(response.estimatedFee).toHaveLength(0);

      client.disconnect();
    });

    it('estimate fees for a contract with premium enabled', async () => {
      const client = await ArchwayClient.connect(archwayd.endpoint);
      const response = await client.getEstimateTxFees(1, contractAddress);

      expect(response.gasLimit).toBeGreaterThan(0);
      expect(response.gasUnitPrice).toMatchObject({
        denom: archwayd.denom,
        amount: expect.stringMatching(/\d+/),
      });
      expect(response.contractAddress).toBe(contractAddress);
      expect(response.estimatedFee).toContainEqual({
        denom: archwayd.denom,
        amount: '100',
      });

      client.disconnect();
    });

    it('check outstanding rewards are coming back', async () => {
      const client = await ArchwayClient.connect(archwayd.endpoint);
      const response = await client.getOutstandingRewards(aliceAddress);

      expect(response.rewardsAddress).toBe(aliceAddress);
      expect(response.totalRewards).toHaveLength(0);
      expect(response.recordsNum).toBe(0);

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

      expect(response).toHaveLength(0);

      client.disconnect();
    });

    it('check flat fee are coming back', async () => {
      const client = await ArchwayClient.connect(archwayd.endpoint);
      const response = await client.getContractPremium(contractAddress);

      expect(response.contractAddress).toBe(contractAddress);
      expect(response.flatFee).toBeDefined();

      client.disconnect();
    });
  });
});
