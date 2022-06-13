
const testnet = {
    chainId: "constantine-1",
    chainName: "Constantine",
    rpc: "https://rpc.constantine-1.archway.tech:443",
    rest: "https://rpc.constantine-1.archway.tech/rest",
    addressPrefix: "archway",
    stakeCurrency: {
      coinDenom: "CONST",
      coinMinimalDenom: "uconst",
      coinDecimals: 6
    },
    currencies: [{
      coinDenom: "CONST",
      coinMinimalDenom: "uconst",
      coinDecimals: 6
    }],
    feeCurrencies: [{
      coinDenom: "CONST",
      coinMinimalDenom: "uconst",
      coinDecimals: 6
    }],
  };


export const configs = { 
  testnet
};