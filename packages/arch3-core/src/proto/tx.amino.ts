import { ContractInstanceMetadata } from "./types";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgSetContractMetadata } from "./tx";
export interface AminoMsgSetContractMetadata extends AminoMsg {
  type: "/archway.gastracker.v1.MsgSetContractMetadata";
  value: {
    sender: string;
    contract_address: string;
    metadata: {
      developer_address: string;
      reward_address: string;
      gas_rebate_to_user: boolean;
      collect_premium: boolean;
      premium_percentage_charged: string;
    };
  };
}
export const AminoConverter = {
  "/archway.gastracker.v1.MsgSetContractMetadata": {
    aminoType: "/archway.gastracker.v1.MsgSetContractMetadata",
    toAmino: ({
      sender,
      contractAddress,
      metadata
    }: MsgSetContractMetadata): AminoMsgSetContractMetadata["value"] => {
      return {
        sender,
        contract_address: contractAddress,
        metadata: {
          developer_address: metadata.developerAddress,
          reward_address: metadata.rewardAddress,
          gas_rebate_to_user: metadata.gasRebateToUser,
          collect_premium: metadata.collectPremium,
          premium_percentage_charged: metadata.premiumPercentageCharged.toString()
        }
      };
    },
    fromAmino: ({
      sender,
      contract_address,
      metadata
    }: AminoMsgSetContractMetadata["value"]): MsgSetContractMetadata => {
      return {
        sender,
        contractAddress: contract_address,
        metadata: {
          developerAddress: metadata.developer_address,
          rewardAddress: metadata.reward_address,
          gasRebateToUser: metadata.gas_rebate_to_user,
          collectPremium: metadata.collect_premium,
          premiumPercentageCharged: Long.fromString(metadata.premium_percentage_charged)
        }
      };
    }
  }
};