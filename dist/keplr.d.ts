import { OfflineSigner } from "@cosmjs/proto-signing";
import { ArchwaySigningClient } from "./connect";
import { ArchwayClient } from "./query";
export declare function useArchwayKeplr(): {
    activateBrowserWallet: () => Promise<string>;
    disconnect: () => Promise<void>;
    addressPrefix: string;
    account: string;
    active: boolean;
    signer: OfflineSigner;
    client: ArchwaySigningClient;
    readOnlyClient: ArchwayClient;
    chainConfig: {
        chainId: string;
        chainName: string;
        addressPrefix: string;
        rpc: string;
        rest: string;
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        }[];
    };
};
