import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

import { ArchwayClient } from './archwayclient';

const archwayd = {
  chainId: 'local-1',
  endpoint: 'http://localhost:26657',
  prefix: 'archway',
  denom: 'uarch',
};

async function validatorWallet(): Promise<DirectSecp256k1HdWallet> {
  if (!process.env.VALIDATOR_MNEMONIC) {
    throw new Error('Missing VALIDATOR_MNEMONIC env var!');
  }
  return await DirectSecp256k1HdWallet.fromMnemonic(process.env.VALIDATOR_MNEMONIC, { prefix: archwayd.prefix });
}

async function getFirstWalletAddress(): Promise<string> {
  const wallet = await validatorWallet();
  const accounts = await wallet.getAccounts();
  return accounts[0].address;
}

const contracts = {
  voter: {
    address: process.env.VOTER_CONTRACT_ADDRESS || '',
  },
};

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
      const contractAddress = contracts.voter.address;

      const client = await ArchwayClient.connect(archwayd.endpoint);
      const response = await client.getContractMetadata(contractAddress);

      const validatorAddress = await getFirstWalletAddress();
      expect(response).toMatchObject({
        contractAddress,
        ownerAddress: validatorAddress,
        rewardsAddress: validatorAddress
      });

      client.disconnect();
    });

    it('estimate fees without contract', async () => {
      const client = await ArchwayClient.connect(archwayd.endpoint);
      const response = await client.getEstimateTxFees(1);

      expect(response.gasUnitPrice).toBeDefined();
      expect(response.contractAddress).toBeUndefined();
      expect(response.estimatedFee).toHaveLength(0);

      client.disconnect();
    });

    it('estimate fees for a contract with premium enabled', async () => {
      const contractAddress = contracts.voter.address;

      const client = await ArchwayClient.connect(archwayd.endpoint);
      const response = await client.getEstimateTxFees(1, contractAddress);

      expect(response.gasUnitPrice).toBeDefined();
      expect(response.contractAddress).toBe(contractAddress);
      expect(response.estimatedFee).toContainEqual({
        denom: archwayd.denom,
        amount: '100',
      });

      client.disconnect();
    });

    it('check outstanding rewards are coming back', async () => {
      const rewardsAddress = await getFirstWalletAddress();

      const client = await ArchwayClient.connect(archwayd.endpoint);
      const response = await client.getOutstandingRewards(rewardsAddress);

      expect(response.rewardsAddress).toBe(rewardsAddress);
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
      const rewardsAddress = await getFirstWalletAddress();

      const client = await ArchwayClient.connect(archwayd.endpoint);
      const response = await client.getAllRewardsRecords(rewardsAddress);

      expect(response).toHaveLength(0);

      client.disconnect();
    });

    it('check flat fee are coming back', async () => {
      const contractAddress = contracts.voter.address;

      const client = await ArchwayClient.connect(archwayd.endpoint);
      const response = await client.getContractPremium(contractAddress);

      expect(response.contractAddress).toBe(contractAddress);
      expect(response.flatFee).toBeDefined();

      client.disconnect();
    });
  });
});
