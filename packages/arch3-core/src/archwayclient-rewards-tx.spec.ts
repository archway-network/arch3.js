/* eslint jest/no-hooks: ["error", { "allow": ["afterAll", "beforeAll"] }] */
import { MsgClientImpl } from "@archwayhq/arch3-proto/build/codegen/archway/rewards/v1beta1/tx.rpc.msg";
import { SigningCosmWasmClientOptions } from "@cosmjs/cosmwasm-stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { createProtobufRpcClient, GasPrice, QueryClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";

import { ArchwayClient } from "../build";
import { SigningArchwayClient } from "./archwayclient";

const wasmd = {
  blockTime: 1_000, // ms
  chainId: "local-1",
  endpoint: "http://localhost:26657",
  prefix: "archway",
};

const alice = {
  mnemonic:
  // "culture ten bar chase cross obey margin owner recycle trim valid logic forward mixed render have patrol dynamic tuition choose thing salute inside blossom",
  "mosquito kangaroo solar park maple employ train rotate picnic ghost bachelor hundred rain pelican draft sunny goddess confirm fragile wedding egg bridge camp settle",
  // address0: "archway1ecak50zhujddqd639xw4ejghnyrrc6jlwnlgwt",
  address0: "archway1rev2n7edzn6l84k37dhnhs0m9wqlveezvwjj38",
};

const contractAddress =
  // "archway16fpjs4u9pq7px3h3zaawegtfp63dnerm83rjywjn7j9t8g0vtu9qhvgvsr";
  "archway14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sy85n2u";

const defaultGasPrice = GasPrice.fromString("500uarch");

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
    console.log("setContractRewardsMetadata", response);
    expect(response).toBeTruthy();
  });

  it("can withdraw contract rewards", async () => {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
      "domain pill faint fold ethics rabbit blouse unlock drip group monkey pony",
      {
        prefix: wasmd.prefix,
      }
    );
    console.log("wallet", wallet);

    const rewardsAddress = "archway12ypnach24z0ckqcwmslkscf9arm903n200runp";
    const endpoint = "https://rpc.constantine-1.archway.tech";
    await ArchwayClient.connect(endpoint);
    const rewardRecords = await ArchwayClient.getRewardsRecords({
      rewardsAddress
    });
    console.log("rewardRecords", rewardRecords);

    const client = await SigningArchwayClient.connectWithSigner(
      endpoint,
      wallet,
      {
        broadcastPollIntervalMs: 300,
        broadcastTimeoutMs: 8_000,
        gasPrice: GasPrice.fromString("500uconst")
      }
    );
    const response = await client.withdrawContractRewards(rewardsAddress, rewardRecords.records.length);
    expect(response).toBeTruthy();
    expect(response?.recordsNum?.toNumber()).toBe(1);
  });
});
