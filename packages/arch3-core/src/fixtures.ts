import { SigningCosmWasmClientOptions } from "@cosmjs/cosmwasm-stargate";
import { GasPrice } from "@cosmjs/stargate";
import * as dotenv from "dotenv";

dotenv.config();

export const wasmd = {
  blockTime: 1_000, // ms
  chainId: "local-1",
  endpoint: "http://localhost:26657",
  prefix: "archway",
};

export const alice = {
  mnemonic: process.env.DEVX_MNEMONIC || "",
  address0: "archway1rev2n7edzn6l84k37dhnhs0m9wqlveezvwjj38",
};

export const contractAddress = "archway14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sy85n2u";

export const denom = 'uarch';
export const defaultGasPrice = GasPrice.fromString(`500${denom}`);

export const defaultSigningClientOptions: SigningCosmWasmClientOptions = {
  broadcastPollIntervalMs: 300,
  broadcastTimeoutMs: 8_000,
  gasPrice: defaultGasPrice,
};