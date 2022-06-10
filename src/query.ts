import { Coin, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import {Block, IndexedTx } from "@cosmjs/stargate";
import {CosmWasmClient, CodeDetails, Contract, ContractCodeHistoryEntry} from "@cosmjs/cosmwasm-stargate"

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


    /** Get the Block info at any height */ 
    async getBlock(height: number) {
        const block_height: Block = await this.client.getBlock(height);
        return block_height
    } ;

    /** Get the Chain ID of the chain */ 
    async getChainID() {
        const chain_id: string = await this.client.getChainId();
        return chain_id
    };



    /** Get the latest block height of the chain */ 
    async getBlockHeight() {
        const height = await this.client.getHeight();
        return height
    };

    /** Get TX info from the transaction hash */ 
    async getTX(tx_hash: string) {
        const tx: IndexedTx = await this.client.getTx(tx_hash);
        return tx
    };

    /** Search for certain transactions according to certain queries and filters. 
     Filters set to null by default */
    async searchTx(search_tx_type: ArchwayTXSearch, filter: ArchwayTxFilter = {}): Promise<readonly IndexedTx[]> {
        const indexed_txs = await this.client.searchTx(search_tx_type, filter);
        return indexed_txs
    };
    
    
    /** Returns Code Info from Code ID  */
    async getCodeInfo(code_id: number): Promise<CodeDetails> {
        let details = this.client.getCodeDetails(code_id);
        return details
    }

    /** Returns creator of Code ID */ 
    async getCodeCreator(code_id: number): Promise<string> {
        let details = await this.getCodeInfo(code_id);
        return details.creator
    }

    /**  get Contract Info from address
     Contract returns address, admin, label, creator, code_id, and IBCPortID */
    async getContract(contract_address: string): Promise<Contract> {
        let contract = await this.client.getContract(contract_address);
        return contract
    }

    /** get history of messages executed or instantiated on contract as readonly array */
    async getContractHistory(contract_address: string): Promise<readonly ContractCodeHistoryEntry[]> {
        let history = await this.client.getContractCodeHistory(contract_address);
        return history
    }

    /** Get all contract addresses instantiated from a certain code ID */
    async getContractsFromCode(code_id: number): Promise<readonly string[]> {
        let contracts = await this.client.getContracts(code_id);
        return contracts
    }

    /** Makes a smart query on the contract, returns the parsed JSON document.
     * Promise is rejected when contract does not exist or if invalid query format.
     * If there is also no response format in the smart contract, promise will be rejected.
     */
    async queryContract(contract_address: string, query_msg: Record<string,unknown>): Promise<any> {
        let response = await this.client.queryContractSmart(contract_address, query_msg);
        return response
    }


}

/** Option of Archway Transaction Search for searching by height */ 
export interface SearchByHeightQuery {
  readonly height: number;
}

/** Option of Archway Transaction Search for searching by address sent from or to */ 
export interface SearchBySentFromOrToQuery {
  readonly sentFromOrTo: string;
}

/** Interface for filtering transactions in search according to height */ 
export interface ArchwayTxFilter {
    readonly minHeight?: number;
    readonly maxHeight?: number;
  }

export type ArchwayTXSearch = SearchByHeightQuery | SearchBySentFromOrToQuery;

