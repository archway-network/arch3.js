import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { ArchwaySigningClient } from "./connect";

/** Connect to Keplr to create an ArchwaySigningClient Interface */
declare const window: any;
export async function ConnectArchwayKeplr(chain_id: string) {
    await window.keplr.enable(chain_id);
    const offlineSigner = window.getOfflineSigner(chain_id);
    const accounts = await offlineSigner.getAccounts();
    const lcdApiTestnet = "https://rpc.constantine-1.archway.tech";
    const client: SigningCosmWasmClient = await SigningCosmWasmClient.connectWithSigner(lcdApiTestnet, accounts[0].address, offlineSigner);
    const archway_client: ArchwaySigningClient = new ArchwaySigningClient(accounts,client);
    return archway_client
}
