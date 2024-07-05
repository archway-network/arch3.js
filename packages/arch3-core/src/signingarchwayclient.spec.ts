import { Coin, addCoins, coin, coins } from '@cosmjs/amino';
import { AccountData, DirectSecp256k1HdWallet, decodeTxRaw, makeCosmoshubPath } from '@cosmjs/proto-signing';
import { GasPrice, StdFee, calculateFee } from '@cosmjs/stargate';
import { Fee } from 'cosmjs-types/cosmos/tx/v1beta1/tx';

import { ContractMetadata, SigningArchwayClient, SigningArchwayClientOptions } from '.';

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

const mnemonics = {
  alice: process.env.ALICE_MNEMONIC || '',
};

async function getWalletWithAccounts(): Promise<[DirectSecp256k1HdWallet, readonly AccountData[]]> {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonics.alice, {
    hdPaths: [0, 1, 2, 3, 4, 5].map(makeCosmoshubPath),
    prefix: archwayd.prefix
  });
  const accounts = await wallet.getAccounts();
  return [wallet, accounts];
}

const flatFee = coin(1000, archwayd.denom);

const clientOptions: SigningArchwayClientOptions = {
  broadcastPollIntervalMs: 200,
  broadcastTimeoutMs: 8_000,
};

async function assertGasPriceEstimation(
  client: SigningArchwayClient,
  transactionHash: string,
  gasWanted: bigint,
  gasUnitPrice?: GasPrice,
  flatFees: readonly Coin[] = [],
): Promise<void> {

  const txResponse = (await client.getTx(transactionHash))!;
  const tx = decodeTxRaw(txResponse.tx);

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const { amount: calculatedAmount, gas: expectedGas } = calculateFee(Number(gasWanted), gasUnitPrice!);
  const expectedAmount = [...calculatedAmount, ...flatFees].reduce(addCoins);
  const txFee = tx.authInfo.fee;
  expect(txFee?.amount).toContainEqual(expectedAmount);
  expect(txFee?.gasLimit.toString()).toBe(expectedGas);
}

describe('SigningArchwayClient', () => {
  describe('connectWithSigner', () => {
    it('can be constructed', async () => {
      const wallet = await DirectSecp256k1HdWallet.generate(12, { prefix: archwayd.prefix });
      const client = await SigningArchwayClient.connectWithSigner(archwayd.endpoint, wallet, clientOptions);
      expect(client).toBeDefined();
      client.disconnect();
    });
  });

  describe('connectWithSignerAndBatchClient', () => {
    it('can be constructed', async () => {
      const wallet = await DirectSecp256k1HdWallet.generate(12, { prefix: archwayd.prefix });
      const client = await SigningArchwayClient.connectWithSignerAndBatchClient(archwayd.endpoint, wallet, clientOptions);
      expect(client).toBeDefined();
      client.disconnect();
    });
  });

  describe('offline', () => {
    it('can be constructed', async () => {
      const wallet = await DirectSecp256k1HdWallet.generate(12, { prefix: archwayd.prefix });
      const client = await SigningArchwayClient.offline(wallet, clientOptions);
      expect(client).toBeDefined();
      client.disconnect();
    });
  });

  describe('minimum gas fee estimation', () => {
    it('works for base transactions', async () => {
      const [wallet, accounts] = await getWalletWithAccounts();
      const client = await SigningArchwayClient.connectWithSigner(archwayd.endpoint, wallet, clientOptions);

      const { gasUnitPrice } = await client.getEstimateTxFees();
      const { transactionHash, gasWanted } = await client.sendTokens(
        accounts[4].address,
        accounts[1].address,
        coins(1, archwayd.denom),
        'auto'
      );

      await assertGasPriceEstimation(client, transactionHash, gasWanted, gasUnitPrice);

      client.disconnect();
    });

    it('works for base transactions with a custom multiplier', async () => {
      const [wallet, accounts] = await getWalletWithAccounts();
      const client = await SigningArchwayClient.connectWithSigner(archwayd.endpoint, wallet, clientOptions);

      const { gasUnitPrice } = await client.getEstimateTxFees();
      const { transactionHash, gasWanted } = await client.sendTokens(
        accounts[4].address,
        accounts[1].address,
        coins(1, archwayd.denom),
        1.5
      );

      await assertGasPriceEstimation(client, transactionHash, gasWanted, gasUnitPrice);

      client.disconnect();
    });

    it('allows overriding the fees', async () => {
      const [wallet, accounts] = await getWalletWithAccounts();
      const client = await SigningArchwayClient.connectWithSigner(archwayd.endpoint, wallet, clientOptions);

      const gasPrice = BigInt(900000000000);
      const gas = BigInt(200000);
      const fee: StdFee = {
        amount: coins((gasPrice * gas).toString(), archwayd.denom),
        gas: gas.toString(),
      };
      const { transactionHash } = await client.sendTokens(
        accounts[4].address,
        accounts[1].address,
        coins(1, archwayd.denom),
        fee
      );


      const txResponse = (await client.getTx(transactionHash))!;
      const tx = decodeTxRaw(txResponse.tx);

      const txFee = tx.authInfo.fee;
      expect(txFee?.amount).toStrictEqual(fee.amount);
      expect(txFee?.gasLimit.toString()).toBe(fee.gas);

      client.disconnect();
    });

    describe('on contracts without premium', () => {
      it('works on execute', async () => {
        const [wallet, accounts] = await getWalletWithAccounts();
        const client = await SigningArchwayClient.connectWithSigner(archwayd.endpoint, wallet, clientOptions);

        const contractAddress = contracts.voter.addresses[3];
        const ownerAddress = accounts[3].address;

        /* eslint-disable camelcase, @typescript-eslint/naming-convention */
        const msg = {
          new_voting: {
            name: 'test_voting_fees',
            vote_options: ['yes', 'no'],
            duration: 10000000000,
          }
        };
        /* eslint-enable */

        const { gasUnitPrice } = await client.getEstimateTxFees();
        const { transactionHash, gasWanted } = await client.execute(
          ownerAddress,
          contractAddress,
          msg,
          'auto',
          undefined,
          coins(10, archwayd.denom)
        );

        await assertGasPriceEstimation(client, transactionHash, gasWanted, gasUnitPrice);

        client.disconnect();
      });
    });

    describe('on contracts with premium', () => {
      it('works on execute', async () => {
        const [wallet, accounts] = await getWalletWithAccounts();
        const client = await SigningArchwayClient.connectWithSigner(archwayd.endpoint, wallet, clientOptions);

        const contractAddress = contracts.voter.addresses[1];
        const ownerAddress = accounts[1].address;

        /* eslint-disable camelcase, @typescript-eslint/naming-convention */
        const msgs = [
          {
            new_voting: {
              name: 'test_voting_fees_1',
              vote_options: ['yes', 'no'],
              duration: 10000000000,
            }
          },
          {
            new_voting: {
              name: 'test_voting_fees_2',
              vote_options: ['yes', 'no', 'maybe'],
              duration: 10000000000,
            }
          }
        ];
        /* eslint-enable */
        const instructions = msgs.map(msg => {
          return {
            contractAddress,
            msg,
            funds: coins(10, archwayd.denom),
          };
        });

        const { gasUnitPrice } = await client.getEstimateTxFees();
        const { transactionHash, gasWanted } = await client.executeMultiple(
          ownerAddress,
          instructions,
          'auto',
          undefined
        );

        await assertGasPriceEstimation(client, transactionHash, gasWanted, gasUnitPrice, [flatFee, flatFee]);

        client.disconnect();
      });
    });
  });

  describe('rewards', () => {
    describe('contract metadata', () => {
      it('sets both owner and rewards', async () => {
        const [wallet, accounts] = await getWalletWithAccounts();
        const client = await SigningArchwayClient.connectWithSigner(archwayd.endpoint, wallet, clientOptions);

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
          gasWanted: expect.any(BigInt),
          gasUsed: expect.any(BigInt),
          metadata,
        });
        expect(result.logs).not.toHaveLength(0);
        expect(result.events).not.toHaveLength(0);

        client.disconnect();
      });

      it('do not modify the metadata when both owner and rewards are empty', async () => {
        const [wallet, accounts] = await getWalletWithAccounts();
        const client = await SigningArchwayClient.connectWithSigner(archwayd.endpoint, wallet, clientOptions);

        const contractAddress = contracts.voter.addresses[1];
        const ownerAddress = accounts[1].address;
        const rewardsAddress = accounts[4].address;

        const result = await client.setContractMetadata(ownerAddress, { contractAddress }, 'auto');

        expect(result).toMatchObject({
          height: expect.any(Number),
          transactionHash: expect.any(String),
          gasWanted: expect.any(BigInt),
          gasUsed: expect.any(BigInt),
          metadata: {
            contractAddress,
            ownerAddress,
            rewardsAddress,
          },
        });
        expect(result.logs).not.toHaveLength(0);
        expect(result.events).not.toHaveLength(0);

        client.disconnect();
      });
    });

    describe('contract premium', () => {
      it('sets the contract premium', async () => {
        const [wallet, accounts] = await getWalletWithAccounts();
        const client = await SigningArchwayClient.connectWithSigner(archwayd.endpoint, wallet, clientOptions);

        const ownerAddress = accounts[1].address;
        const contractAddress = contracts.voter.addresses[1];

        const result = await client.setContractPremium(
          ownerAddress,
          contractAddress,
          flatFee,
          'auto'
        );

        expect(result).toMatchObject({
          height: expect.any(Number),
          transactionHash: expect.any(String),
          gasWanted: expect.any(BigInt),
          gasUsed: expect.any(BigInt),
          premium: {
            contractAddress,
            flatFee,
          },
        });
        expect(result.logs).not.toHaveLength(0);
        expect(result.events).not.toHaveLength(0);

        client.disconnect();
      });

      it('disables the contract premium', async () => {
        const [wallet, accounts] = await getWalletWithAccounts();
        const client = await SigningArchwayClient.connectWithSigner(archwayd.endpoint, wallet, clientOptions);

        const contractAddress = contracts.voter.addresses[3];
        const ownerAddress = accounts[3].address;

        const result = await client.setContractPremium(
          ownerAddress,
          contractAddress,
          coin(0, archwayd.denom),
          'auto'
        );

        expect(result).toMatchObject({
          height: expect.any(Number),
          transactionHash: expect.any(String),
          gasWanted: expect.any(BigInt),
          gasUsed: expect.any(BigInt),
          premium: {
            contractAddress,
            flatFee: coin(0, archwayd.denom),
          },
        });
        expect(result.logs).not.toHaveLength(0);
        expect(result.events).not.toHaveLength(0);

        client.disconnect();
      });
    });

    describe('withdraw', () => {
      it('withdraws rewards by limit', async () => {
        const [wallet, accounts] = await getWalletWithAccounts();
        const client = await SigningArchwayClient.connectWithSigner(archwayd.endpoint, wallet, clientOptions);

        const contractAddress = contracts.voter.addresses[4];
        const rewardsAddress = accounts[4].address;

        /* eslint-disable camelcase, @typescript-eslint/naming-convention */
        const msg = {
          new_voting: {
            name: 'test_voting_rewards',
            vote_options: ['yes', 'no'],
            duration: 10000000000,
          }
        };
        /* eslint-enable camelcase, @typescript-eslint/naming-convention */
        await client.execute(rewardsAddress, contractAddress, msg, 'auto', undefined, coins(10, archwayd.denom));

        const result = await client.withdrawContractRewards(rewardsAddress, 0, 'auto');

        expect(result).toMatchObject({
          height: expect.any(Number),
          transactionHash: expect.any(String),
          gasWanted: expect.any(BigInt),
          gasUsed: expect.any(BigInt),
          rewardsAddress: rewardsAddress,
          rewards: [expect.objectContaining({
            amount: expect.any(String),
            denom: archwayd.denom,
          })],
        });
        expect(result.logs).not.toHaveLength(0);
        expect(result.events).not.toHaveLength(0);

        client.disconnect();
      });

      it('gracefully handles withdrawing when no rewards found', async () => {
        const [wallet, accounts] = await getWalletWithAccounts();
        const client = await SigningArchwayClient.connectWithSigner(archwayd.endpoint, wallet, clientOptions);

        const rewardsAddress = accounts[1].address;

        const result = await client.withdrawContractRewards(rewardsAddress, 0, 'auto');

        expect(result).toMatchObject({
          height: expect.any(Number),
          transactionHash: expect.any(String),
          gasWanted: expect.any(BigInt),
          gasUsed: expect.any(BigInt),
          rewardsAddress: rewardsAddress,
          rewards: expect.arrayContaining([]),
        });
        expect(result.logs).not.toHaveLength(0);
        expect(result.events).not.toHaveLength(0);

        client.disconnect();
      });
    });

    describe('withdrawToWallet', () => {
      it('enables the flag withdrawToWallet in the metadata', async () => {
        const [wallet, accounts] = await getWalletWithAccounts();
        const client = await SigningArchwayClient.connectWithSigner(archwayd.endpoint, wallet, clientOptions);

        const contractAddress = contracts.voter.addresses[2];
        const ownerAddress = accounts[2].address;
        const rewardsAddress = accounts[5].address;

        const metadata: ContractMetadata = {
          contractAddress,
          ownerAddress,
          rewardsAddress,
          withdrawToWallet: true
        };
        const result = await client.setContractMetadata(ownerAddress, metadata, 'auto');

        expect(result).toMatchObject({
          height: expect.any(Number),
          transactionHash: expect.any(String),
          gasWanted: expect.any(BigInt),
          gasUsed: expect.any(BigInt),
          metadata,
        });
        expect(result.logs).not.toHaveLength(0);
        expect(result.events).not.toHaveLength(0);

        client.disconnect();
      });
    });

    describe('simulation', () => {
      it('granter and payer are passed to the `simulate` call', async () => {
        const [wallet, accounts] = await getWalletWithAccounts();
        const client = await SigningArchwayClient.connectWithSigner(archwayd.endpoint, wallet, clientOptions);

        // Setup spy function; spy on `Fee` constructor to be called within the `simulate` instead of `simulate` itself
        // to be able to verify fee params used in the simulation tx instead of just number of gas
        const feeSpy = jest.spyOn(Fee, 'fromPartial');

        const sender = accounts[2].address;
        const granter = accounts[4].address;
        const payer = accounts[5].address;
        const msgs = [];
        const memo = '';

        try {
          await client.calculateFee(
            sender,
            msgs,
            memo,
            1.5,
            granter,
            payer,
          );
        } catch (e) {
          // Don't panic even if failed, as we want to check the arguments used
          // inside the simulation rather than the final result
        }

        expect(feeSpy).toHaveBeenCalledWith({
          granter,
          payer,
        });

        client.disconnect();
      });
    });
  });
});
