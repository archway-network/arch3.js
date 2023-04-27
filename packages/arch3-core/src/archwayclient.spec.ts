import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import Long from 'long';

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
    address: 'archway1f50wez6d0gqgz0grexpzuyhjw3mc2fuxe5k0xlztr7psvw7man0qdharh8',
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
    it('block rewards is coming back', async () => {
      await ArchwayClient.connect(archwayd.endpoint);

      const response = await ArchwayClient.getBlockRewardsTracking({});

      expect(response.block).toBeDefined();
    });

    it('check contract metadata is coming back', async () => {
      await ArchwayClient.connect(archwayd.endpoint);

      const contractAddress = contracts.voter.address;
      const response = await ArchwayClient.getContractMetadata({
        contractAddress
      });

      const validatorAddress = await getFirstWalletAddress();
      expect(response.metadata).toMatchObject({
        contractAddress,
        ownerAddress: validatorAddress,
        rewardsAddress: validatorAddress
      });
    });

    it('check estimate fees is coming back', async () => {
      await ArchwayClient.connect(archwayd.endpoint);

      const response = await ArchwayClient.getEstimateFees({
        gasLimit: new Long(1),
        contractAddress: '',
      });

      expect(response.gasUnitPrice.denom).toBe(archwayd.denom);
      expect(Number(response.gasUnitPrice.amount)).toBeGreaterThan(0);
    });

    it('check outstanding rewards are coming back', async () => {
      await ArchwayClient.connect(archwayd.endpoint);

      const rewardsAddress = await getFirstWalletAddress();
      const response = await ArchwayClient.getOutstandingRewards({
        rewardsAddress
      });

      expect(response.totalRewards).toHaveLength(0);
      expect(response.recordsNum.isZero()).toBeTruthy();
    });

    it('check params are coming back', async () => {
      await ArchwayClient.connect(archwayd.endpoint);

      const response = await ArchwayClient.getParams(undefined);

      expect(response.params).toBeDefined();
    });

    it('check pool are coming back', async () => {
      await ArchwayClient.connect(archwayd.endpoint);

      const response = await ArchwayClient.getPool(undefined);

      expect(response.undistributedFunds).toBeDefined();
    });

    it('check rewards records are coming back', async () => {
      await ArchwayClient.connect(archwayd.endpoint);

      const rewardsAddress = await getFirstWalletAddress();
      const response = await ArchwayClient.getRewardsRecords({
        rewardsAddress
      });

      expect(response.records).toHaveLength(0);
    });

    it('check flat fee are coming back', async () => {
      await ArchwayClient.connect(archwayd.endpoint);

      const response = await ArchwayClient.getFlatFee({
        contractAddress: contracts.voter.address
      });

      expect(typeof Number(response.flatFeeAmount)).toBe('number');
    });
  });
});
