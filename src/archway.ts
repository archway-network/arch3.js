import { isMsgExecuteEncodeObject, UploadResult } from "@cosmjs/cosmwasm-stargate";
import { EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse, MsgDelegateEncodeObject, StdFee } from "@cosmjs/stargate";
import { ArchwaySigningClient, extractAddress } from "./connect";

export interface MsgSetContractMetadataEncodeObject extends EncodeObject {
    readonly typeUrl: "/archway.gastracker.v1.MsgSetContractMetadata";
    readonly value: Partial<MsgSetContractMetadata>;
}
type MsgSetContractMetadata = {
    sender: string,
    contract_address: string,
    metadata: ContractInstanceMetadata
}

type ContractInstanceMetadata = {
    developer_address: string,
    reward_address: string,
    gas_rebate: boolean,
    collect_premium: boolean,
    premium_percentage_charged: number
}

/** adds developer metadata to blockchain */ 
 export async function addMetadata(
    this: ArchwaySigningClient,
    contract_address:string,
    developer_address: string,
    reward_address: string,
    gas_rebate: boolean,
    collect_premium: boolean,
    premium_percentage_charged: number,
    fee: StdFee ):
     Promise<DeliverTxResponse> {
    let address = await extractAddress(this.wallet);
    const message : MsgSetContractMetadataEncodeObject = {
        typeUrl:  "/archway.gastracker.v1.MsgSetContractMetadata",
        value:  {
            sender: address,
            contract_address: contract_address,
            metadata: {
                developer_address,
                reward_address,
                gas_rebate,
                collect_premium,
                premium_percentage_charged
            }
        }
    }
    let tx_response = await this.client.signAndBroadcast(address,[message],fee);
    return tx_response
}
