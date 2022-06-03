import { Coin, Secp256k1HdWallet, SigningCosmosClient } from "@cosmjs/launchpad";
// Get account info of Signing Client
export async function getAccount(client: SigningCosmosClient) {
    const account = await client.getAccount();
    return account
}

// Get balance of client wallet
export async function getBalance(client: SigningCosmosClient) {
    const balance = await client.getAccount()
    return balance.balance
}

 