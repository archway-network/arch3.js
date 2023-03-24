/* eslint jest/no-hooks: ["error", { "allow": ["afterAll", "beforeAll"] }] */
import { MsgClientImpl } from "@archwayhq/arch3-proto/build/codegen/archway/rewards/v1beta1/tx.rpc.msg";
import { SigningCosmWasmClientOptions } from "@cosmjs/cosmwasm-stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { createProtobufRpcClient, GasPrice, QueryClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";

import { SigningArchwayClient } from "./archwayclient";

const wasmd = {
  blockTime: 1_000, // ms
  chainId: "constantine-1",
  endpoint: "https://rpc.constantine-1.archway.tech",
  prefix: "archway1",
};

const alice = {
  mnemonic:
    "culture ten bar chase cross obey margin owner recycle trim valid logic forward mixed render have patrol dynamic tuition choose thing salute inside blossom",
  pubkey0: {
    type: "/cosmos.crypto.secp256k1.PubKey",
    value: "AuoJH6FNYQVPNxRYSUGudoAIG3aXI+GvyazrmVFf2x/w",
  },
  address0: "archway1ecak50zhujddqd639xw4ejghnyrrc6jlwnlgwt",
};

const contractAddress =
  "archway1u3qhecg2sa8snm49cscg8azsmajyzx2lgp5r7awz5mdumkgsy0xquj4dfs";

const defaultGasPrice = GasPrice.fromString("0.02uarch");

const defaultSigningClientOptions: SigningCosmWasmClientOptions = {
  broadcastPollIntervalMs: 300,
  broadcastTimeoutMs: 8_000,
  gasPrice: defaultGasPrice,
};

describe("Archway Rewards Tx", () => {
  jest.setTimeout(10000);

  let wallet: DirectSecp256k1HdWallet;
  let client: SigningArchwayClient;

  beforeAll(async () => {
    jest.setTimeout(10000);
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

  it("standalone test for set metadata", async () => {
    jest.setTimeout(30000);
    const tmClient = await Tendermint34Client.connect(wasmd.endpoint);
    const rewardsClient = MsgClientImpl;
    const auxClient = new QueryClient(tmClient);
    const rpc = createProtobufRpcClient(auxClient);
    const queryService = new rewardsClient(rpc);
    const response = await queryService.setContractMetadata(
      {
        senderAddress: alice.address0,
        metadata: {
          contractAddress: contractAddress,
          ownerAddress: alice.address0,
          rewardsAddress: alice.address0,
        },
      }
    );
    console.log(response);
    expect(response).toBeTruthy();
  });

  it("can update metadata", async () => {
    const response = await client.setContractRewardsMetadata(
      alice.address0,
      contractAddress,
      alice.address0,
      alice.address0
    );
    expect(response).toBeTruthy();
  });

  it("can withdraw contract rewards", async () => {
    const response = await client.withdrawContractRewards(alice.address0, 1);
    expect(response).toBeTruthy();
    expect(response?.recordsNum?.toNumber()).toBe(1);
  });

  it("can set flat fee", async () => {
    const response = await client.setContractRewardsFlatFee(
      alice.address0,
      contractAddress,
      "uconst",
      "10"
    );
    expect(response).toBeTruthy();
  });
});
