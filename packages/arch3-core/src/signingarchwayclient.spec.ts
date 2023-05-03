import { SigningCosmWasmClientOptions } from '@cosmjs/cosmwasm-stargate';
import { AccountData, coins, DirectSecp256k1HdWallet, makeCosmoshubPath } from '@cosmjs/proto-signing';
import { GasPrice } from '@cosmjs/stargate';

import { SigningArchwayClient } from './signingarchwayclient';
import { ContractMetadata } from './types';

const archwayd = {
  chainId: 'local-1',
  endpoint: 'http://localhost:26657',
  prefix: 'archway',
  denom: 'uarch',
};

const contracts = {
  voter: {
    codeId: parseInt(process.env.VOTER_CONTRACT_CODE_ID || '1'),
    addresses: process.env.VOTER_CONTRACT_ADDRESSES?.split(' ') || []
  },
};

const mnemonics = {
  alice: process.env.ALICE_MNEMONIC || '',
};

async function getWalletWithAccounts(): Promise<[DirectSecp256k1HdWallet, readonly AccountData[]]> {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonics.alice, {
    hdPaths: [0, 1, 2, 3, 4].map(makeCosmoshubPath),
    prefix: archwayd.prefix
  });
  const accounts = await wallet.getAccounts();
  return [wallet, accounts];
}

const defaultGasPrice = GasPrice.fromString('0.2uarch');

const defaultSigningClientOptions: SigningCosmWasmClientOptions = {
  broadcastPollIntervalMs: 200,
  broadcastTimeoutMs: 8_000,
  gasPrice: defaultGasPrice,
};

describe('SigningArchwayClient', () => {
  describe('connectWithSigner', () => {
    it('can be constructed', async () => {
      const wallet = await DirectSecp256k1HdWallet.generate(12, { prefix: archwayd.prefix });
      const client = await SigningArchwayClient.connectWithSigner(archwayd.endpoint, wallet, defaultSigningClientOptions);
      expect(client).toBeDefined();
      client.disconnect();
    });
  });

  describe('rewards', () => {
    describe('contract metadata', () => {
      it('sets both owner and rewards', async () => {
        const [wallet, accounts] = await getWalletWithAccounts();
        const client = await SigningArchwayClient.connectWithSigner(archwayd.endpoint, wallet, defaultSigningClientOptions);

        const contractAddress = contracts.voter.addresses[1];
        const ownerAddress = accounts[1].address;
        const rewardsAddress = accounts[4].address;

        const metadata: ContractMetadata = {
          contractAddress,
          ownerAddress,
          rewardsAddress,
        };
        const result = await client.setContractMetadata(ownerAddress, metadata, 'auto');

        expect(result).toMatchObject({
          height: expect.any(Number),
          transactionHash: expect.any(String),
          gasWanted: expect.any(Number),
          gasUsed: expect.any(Number),
          metadata,
        });
        expect(result.logs).not.toHaveLength(0);
        expect(result.events).not.toHaveLength(0);

        client.disconnect();
      });
    });

    describe('withdraw', () => {
      it.todo('withdraws rewards by limit');

      it.todo('withdraws rewards by id');
    });

    describe('contract premium', () => {
      it.todo('sets the contract premium');
    });
  });
});
