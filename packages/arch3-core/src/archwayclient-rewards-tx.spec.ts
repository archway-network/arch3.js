/* eslint jest/no-hooks: ["error", { "allow": ["afterAll", "beforeAll"] }] */
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

import { ArchwayClient } from "../build";
import { SigningArchwayClient } from "./archwayclient";
import { alice, contractAddress, defaultSigningClientOptions, denom, wasmd } from "./fixtures";

async function execute(signingClient: SigningArchwayClient, senderAddress: string, smartContractAddress: string, msg: any): Promise<any> {
  try {
    const response = await signingClient.execute(senderAddress, smartContractAddress, msg, 'auto');

    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

describe("Archway Rewards Tx", () => {
  let wallet: DirectSecp256k1HdWallet;
  let client: SigningArchwayClient;

  beforeAll(async () => {
    wallet = await DirectSecp256k1HdWallet.fromMnemonic(alice.mnemonic, {
      prefix: wasmd.prefix,
    });
    client = await SigningArchwayClient.connectWithSigner(
      wasmd.endpoint,
      wallet,
      { ...defaultSigningClientOptions }
    );
  });

  afterAll(() => {
    client?.disconnect();
  });

  it("can set metadata", async () => {
    const response = await client.setContractRewardsMetadata(
      alice.address0,
      contractAddress,
      alice.address0,
      alice.address0
    );

    expect(response).toBeTruthy();
    expect(response.code).toBe(0);
  });

  it("can get and withdraw contract rewards", async () => {
    // first reset rewardsAddress to signing account, alice.address0, since signer and rewardsAddress must be same
    await client.setContractRewardsMetadata(
      alice.address0,
      contractAddress,
      alice.address0,
      alice.address0
    );

    // need to do at least two
    await execute(client, alice.address0, contractAddress, { increment: {} });
    await execute(client, alice.address0, contractAddress, { increment: {} });
    // wait for tx and rewards to process
    /* eslint-disable */
    await new Promise(r => setTimeout(r, 30000));

    await ArchwayClient.connect(wasmd.endpoint);
    const rewardRecords = await ArchwayClient.getRewardsRecords({
      rewardsAddress: alice.address0
    });

    const response = await client.withdrawContractRewards(alice.address0, rewardRecords.records.length, rewardRecords.records.map(record => record.id));
    expect(response).toBeTruthy();
    expect(response.code).toBe(0);
  });

  it("can set and get flat fee", async () => {
    const setResponse = await client.setFlatFee(
      alice.address0,
      contractAddress,
      denom,
      "10000"
    );

    expect(setResponse).toBeTruthy();
    expect(setResponse.code).toBe(0);

    const getResponse = await ArchwayClient.getFlatFee({
      contractAddress
    });

    expect(getResponse.flatFeeAmount).toBeTruthy();
  });
});

