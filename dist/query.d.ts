import { Coin } from "@cosmjs/proto-signing";
import { Block, IndexedTx } from "@cosmjs/stargate";
import { CosmWasmClient, CodeDetails, Contract, ContractCodeHistoryEntry } from "@cosmjs/cosmwasm-stargate";
export declare class ArchwayClient {
    client: CosmWasmClient;
    constructor(client: CosmWasmClient);
    getBalance(address: string): Promise<Coin>;
    /** Get the Block info at any height */
    getBlock(height: number): Promise<Block>;
    /** Get the Chain ID of the chain */
    getChainID(): Promise<string>;
    /** Get the latest block height of the chain */
    getBlockHeight(): Promise<number>;
    /** Get TX info from the transaction hash */
    getTX(tx_hash: string): Promise<IndexedTx>;
    /** Search for certain transactions according to certain queries and filters.
     Filters set to null by default */
    searchTx(search_tx_type: ArchwayTXSearch, filter?: ArchwayTxFilter): Promise<readonly IndexedTx[]>;
    /** Returns Code Info from Code ID  */
    getCodeInfo(code_id: number): Promise<CodeDetails>;
    /** Returns creator of Code ID */
    getCodeCreator(code_id: number): Promise<string>;
    /**  get Contract Info from address
     Contract returns address, admin, label, creator, code_id, and IBCPortID */
    getContract(contract_address: string): Promise<Contract>;
    /** get history of messages executed or instantiated on contract as readonly array */
    getContractHistory(contract_address: string): Promise<readonly ContractCodeHistoryEntry[]>;
    /** Get all contract addresses instantiated from a certain code ID */
    getContractsFromCode(code_id: number): Promise<readonly string[]>;
    /** Makes a smart query on the contract, returns the parsed JSON document.
     * Promise is rejected when contract does not exist or if invalid query format.
     * If there is also no response format in the smart contract, promise will be rejected.
     */
    queryContract(contract_address: string, query_msg: Record<string, unknown>): Promise<any>;
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
export declare type ArchwayTXSearch = SearchByHeightQuery | SearchBySentFromOrToQuery;
