import { SigningCosmWasmClientOptions } from '@cosmjs/cosmwasm-stargate';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { GasPrice } from "@cosmjs/stargate";

import { ArchwayClient, SigningArchwayClient } from './archwayclient';

const wasmd = {
  blockTime: 1_000, // ms
  chainId: "local-1",
  endpoint: "http://localhost:26657",
  prefix: "archway1",
};

const alice = {
  mnemonic: "culture ten bar chase cross obey margin owner recycle trim valid logic forward mixed render have patrol dynamic tuition choose thing salute inside blossom",
  pubkey0: {
    type: "/cosmos.crypto.secp256k1.PubKey",
    value: "AuoJH6FNYQVPNxRYSUGudoAIG3aXI+GvyazrmVFf2x/w",
  },
  address0: "archway1ecak50zhujddqd639xw4ejghnyrrc6jlwnlgwt",
};

const defaultGasPrice = GasPrice.fromString("0.02uarch");

const defaultSigningClientOptions: SigningCosmWasmClientOptions = {
  broadcastPollIntervalMs: 300,
  broadcastTimeoutMs: 8_000,
  gasPrice: defaultGasPrice,
};

describe('ArchwayClient', () => {
  describe("connect", () => {
    it("can be constructed", async () => {
      const client = await ArchwayClient.connect(wasmd.endpoint);
      expect(client).toBeTruthy();
      client.disconnect();
    });
  });
});

describe('SigningArchwayClient', () => {
  describe("connectWithSigner", () => {
    it("can be constructed", async () => {
      const wallet = await DirectSecp256k1HdWallet.fromMnemonic(alice.mnemonic, { prefix: wasmd.prefix });
      const client = await SigningArchwayClient.connectWithSigner(wasmd.endpoint, wallet, {
        ...defaultSigningClientOptions
      });
      expect(client).toBeTruthy();
      client.disconnect();
    });
  });
});
