import { isMsgExecuteEncodeObject, UploadResult } from "@cosmjs/cosmwasm-stargate";
import { EncodeObject } from "@cosmjs/proto-signing";
import { DeliverTxResponse, MsgDelegateEncodeObject, StdFee } from "@cosmjs/stargate";
import { ArchwaySigningClient, extractAddress } from "./connect";

export interface MsgSetContractMetadataEncodeObject extends EncodeObject {
    readonly typeUrl: "/cosmos.staking.v1beta1.MsgDelegate";
    readonly value: Partial<MsgSetContractMetadata>;
}
type MsgSetContractMetadata = {
    type: string,
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
 export async function addMetadata(this: ArchwaySigningClient, fee: StdFee ): Promise<DeliverTxResponse> {
    let address = await extractAddress(this.wallet);
    const message: MsgDelegateEncodeObject 
    let tx_response = await this.client.signAndBroadcast(address,[message],fee)
}
