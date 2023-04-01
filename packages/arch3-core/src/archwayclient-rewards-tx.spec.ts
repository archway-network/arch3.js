/* eslint-disable */
/* eslint jest/no-hooks: ["error", { "allow": ["afterAll", "beforeAll"] }] */
import { SigningCosmWasmClientOptions } from "@cosmjs/cosmwasm-stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import { ArchwayClient } from "../build";
import { SigningArchwayClient } from "./archwayclient";
import * as dotenv from "dotenv";

dotenv.config();

const wasmd = {
  blockTime: 1_000, // ms
  chainId: "local-1",
  endpoint: "http://localhost:26657",
  prefix: "archway",
};

const alice = {
  mnemonic: process.env.DEVX_MNEMONIC || "",
  address0: "archway1rev2n7edzn6l84k37dhnhs0m9wqlveezvwjj38",
};

const contractAddress = "archway14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sy85n2u";

const denom = 'uarch';
const defaultGasPrice = GasPrice.fromString(`500${denom}`);

const defaultSigningClientOptions: SigningCosmWasmClientOptions = {
  broadcastPollIntervalMs: 300,
  broadcastTimeoutMs: 8_000,
  gasPrice: defaultGasPrice,
};

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

  it("can withdraw contract rewards", async () => {
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
    await new Promise(r => setTimeout(r, 30000));

    await ArchwayClient.connect(wasmd.endpoint);    
    const rewardRecords = await ArchwayClient.getRewardsRecords({
      rewardsAddress: alice.address0
    });

    const response = await client.withdrawContractRewards(alice.address0, rewardRecords.records.length, rewardRecords.records.map(record => record.id));
    expect(response).toBeTruthy();
    expect(response.code).toBe(0);
  });

  it("can set flat fee", async () => {
    const response = await client.setFlatFee(
      alice.address0,
      contractAddress,
      denom,
      "10000"
    );
    
    expect(response).toBeTruthy();
    expect(response.code).toBe(0);
  });
});

async function execute(signingClient: SigningArchwayClient, senderAddress: string, smartContractAddress: string, msg: any): Promise<any> {
  try {
      const response = await signingClient.execute(senderAddress, smartContractAddress, msg, 'auto');    

      return response;
  } catch(e) {
      console.error(e);
      throw e;
  }
};