import { Coin, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import {SigningStargateClient, StargateClient, assertIsDeliverTxSuccess, Block, IndexedTx } from "@cosmjs/stargate";
import { extractAddress, ArchwaySigningClient } from "./connect";
import {SigningCosmWasmClient, CosmWasmClient} from "@cosmjs/cosmwasm-stargate"

// Interface that holds the Read Client and Wallet Account

export class ArchwayClient {
    public client: CosmWasmClient

    constructor(client: CosmWasmClient) {
        this.client = client
    }
    // Get balance of any address on the blockchain
    async getBalance(address: string): Promise<Coin> {
        const balance = await this.client.getBalance(address, "uconst");
        return balance
    };

    // Get the staked balance of any address on the blockchain
    /*
    async getStakedBalance(delegator_address: string) {
        const balance = await this.client.getBalanceStaked(delegator_address);
        return balance
    };
    */

    // Get the Block info at any height
    async getBlock(height: number) {
        const block_height: Block = await this.client.getBlock(height);
        return block_height
    } ;

    // Get the Chain ID of the chain
    async getChainID() {
        const chain_id: string = await this.client.getChainId();
        return chain_id
    };

    // Get all the delegations from any address to an Archway validator
    /*
    async getDelegations(delegator_address: string, validator_address: string) {
        const balance = await this.client.getDelegation(delegator_address, validator_address);
        return balance
    };
    */

    // Get the latest block height of the chain
    async getBlockHeight() {
        const height = await this.client.getHeight();
        return height
    };

    // Get TX info from the transaction hash
    async getTX(tx_hash: string) {
        const tx: IndexedTx = await this.client.getTx(tx_hash);
        return tx
    };

    // Search for certain transactions according to certain queries and filters. 
    // Filters set to null by default
    async searchTx(search_tx_type: ArchwayTXSearch, filter: ArchwayTxFilter = {}): Promise<readonly IndexedTx[]> {
        const indexed_txs = await this.client.searchTx(search_tx_type, filter);
        return indexed_txs
    };

}

// Option of Archway Transaction Search for searching by height
export interface SearchByHeightQuery {
  readonly height: number;
}

// Option of Archway Transaction Search for searching by address sent from or to
export interface SearchBySentFromOrToQuery {
  readonly sentFromOrTo: string;
}

// Interface for filtering transactions in search according to height
export interface ArchwayTxFilter {
    readonly minHeight?: number;
    readonly maxHeight?: number;
  }

export type ArchwayTXSearch = SearchByHeightQuery | SearchBySentFromOrToQuery;

