/** Testnet configurations for constantine-1 chain */
const testnet = {
  chainId: "constantine-1",
  chainName: "Archway",
  addressPrefix: "archway",
  rpc: "https://rpc.constantine-1.archway.tech443/",
  rest: "https://api.constantine-1.archway.tech",
  bip44: {
    // You can only set the coin type of BIP44.
    // 'Purpose' is fixed to 44.
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: "archway",
    bech32PrefixAccPub: "archwaypub",
    bech32PrefixValAddr: "archwayvaloper",
    bech32PrefixValPub: "archwayvaloperpub",
    bech32PrefixConsAddr: "archwayvalcons",
    bech32PrefixConsPub: "archwayvalconspub"
  },
  stakeCurrency: { coinDenom: "CONST", coinMinimalDenom: "uconst", coinDecimals: 6 },
  currencies: [
    { coinDenom: "CONST", coinMinimalDenom: "uconst", coinDecimals: 6 },
  ],
  feeCurrencies: [
    { coinDenom: "CONST", coinMinimalDenom: "uconst", coinDecimals: 6 },
  ],
};

export const configs = { 
  testnet
};