import { Coin, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import {SigningStargateClient, StargateClient, assertIsDeliverTxSuccess, Block, IndexedTx } from "@cosmjs/stargate";
import { extractAddress, ArchwaySigningClient, ArchwayClient } from "./connect";

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


// Get balance of an address
ArchwayClient.prototype.getBalance = async function(address: string ) {
    const balance = await this.client.getBalance(address, "uconst");
    return balance
}

// Get the staked balance of an address
ArchwayClient.prototype.getStakedBalance = async function(delegator_address: string ) {
    const balance = await this.client.getBalanceStaked(delegator_address);
    return balance
}


// Get block details at a certain height
ArchwayClient.prototype.getBlock = async function(height: number ): Promise<Block> {
    const block_height: Block = await this.client.getHeight(height);
    return block_height
}

// Get chainID of the blockchain
ArchwayClient.prototype.getChainID = async function() {
    const chain_id: string = await this.client.getChainID();
    return chain_id
}

// Get the delegations of an Archway address to a certain Validator
ArchwayClient.prototype.getDelegations= async function(delegator_address: string, validator_address: string ) {
    const balance = await this.client.Delegation(delegator_address);
    return balance
}

// Get current block height of the chain
ArchwayClient.prototype.getBlockHeight= async function() {
    const height: number = await this.client.getHeight();
    return height
}

// Get TX info from a certain TX Hash
ArchwayClient.prototype.getTX= async function(tx_hash:string) {
    const height: IndexedTx = await this.client.getTx(tx_hash);
    return height
}

// Search transactions sent according to a certain query
ArchwayClient.prototype.searchTx= async function(search_tx_type: ArchwayTXSearch, filter: ArchwayTxFilter = {} ) {
    const indexed_tx: IndexedTx = await this.client.searchTx(search_tx_type, filter);
    return indexed_tx
}

