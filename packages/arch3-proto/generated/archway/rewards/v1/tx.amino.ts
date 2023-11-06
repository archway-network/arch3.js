/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgSetContractMetadata, MsgWithdrawRewards, MsgSetFlatFee, MsgUpdateParams } from "./tx";
export interface MsgSetContractMetadataAminoType extends AminoMsg {
  type: "/archway.rewards.v1.MsgSetContractMetadata";
  value: {
    sender_address: string;
    metadata: {
      contract_address: string;
      owner_address: string;
      rewards_address: string;
    };
  };
}
export interface MsgWithdrawRewardsAminoType extends AminoMsg {
  type: "/archway.rewards.v1.MsgWithdrawRewards";
  value: {
    rewards_address: string;
    records_limit: {
      limit: string;
    };
    record_ids: {
      ids: string[];
    };
  };
}
export interface MsgSetFlatFeeAminoType extends AminoMsg {
  type: "/archway.rewards.v1.MsgSetFlatFee";
  value: {
    sender_address: string;
    contract_address: string;
    flat_fee_amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/archway.rewards.v1.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      inflation_rewards_ratio: string;
      tx_fee_rebate_ratio: string;
      max_withdraw_records: string;
      min_price_of_gas: {
        denom: string;
        amount: string;
      };
    };
  };
}
export const AminoConverter = {
  "/archway.rewards.v1.MsgSetContractMetadata": {
    aminoType: "/archway.rewards.v1.MsgSetContractMetadata",
    toAmino: ({
      senderAddress,
      metadata
    }: MsgSetContractMetadata): MsgSetContractMetadataAminoType["value"] => {
      return {
        sender_address: senderAddress,
        metadata: {
          contract_address: metadata.contractAddress,
          owner_address: metadata.ownerAddress,
          rewards_address: metadata.rewardsAddress
        }
      };
    },
    fromAmino: ({
      sender_address,
      metadata
    }: MsgSetContractMetadataAminoType["value"]): MsgSetContractMetadata => {
      return {
        senderAddress: sender_address,
        metadata: {
          contractAddress: metadata.contract_address,
          ownerAddress: metadata.owner_address,
          rewardsAddress: metadata.rewards_address
        }
      };
    }
  },
  "/archway.rewards.v1.MsgWithdrawRewards": {
    aminoType: "/archway.rewards.v1.MsgWithdrawRewards",
    toAmino: ({
      rewardsAddress,
      recordsLimit,
      recordIds
    }: MsgWithdrawRewards): MsgWithdrawRewardsAminoType["value"] => {
      return {
        rewards_address: rewardsAddress,
        records_limit: {
          limit: recordsLimit.limit.toString()
        },
        record_ids: {
          ids: recordIds.ids.map(el0 => el0.toString())
        }
      };
    },
    fromAmino: ({
      rewards_address,
      records_limit,
      record_ids
    }: MsgWithdrawRewardsAminoType["value"]): MsgWithdrawRewards => {
      return {
        rewardsAddress: rewards_address,
        recordsLimit: {
          limit: Long.fromString(records_limit.limit)
        },
        recordIds: {
          ids: record_ids.ids.map(el1 => Long.fromString(el1))
        }
      };
    }
  },
  "/archway.rewards.v1.MsgSetFlatFee": {
    aminoType: "/archway.rewards.v1.MsgSetFlatFee",
    toAmino: ({
      senderAddress,
      contractAddress,
      flatFeeAmount
    }: MsgSetFlatFee): MsgSetFlatFeeAminoType["value"] => {
      return {
        sender_address: senderAddress,
        contract_address: contractAddress,
        flat_fee_amount: {
          denom: flatFeeAmount.denom,
          amount: Long.fromValue(flatFeeAmount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender_address,
      contract_address,
      flat_fee_amount
    }: MsgSetFlatFeeAminoType["value"]): MsgSetFlatFee => {
      return {
        senderAddress: sender_address,
        contractAddress: contract_address,
        flatFeeAmount: {
          denom: flat_fee_amount.denom,
          amount: flat_fee_amount.amount
        }
      };
    }
  },
  "/archway.rewards.v1.MsgUpdateParams": {
    aminoType: "/archway.rewards.v1.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          inflation_rewards_ratio: params.inflationRewardsRatio,
          tx_fee_rebate_ratio: params.txFeeRebateRatio,
          max_withdraw_records: params.maxWithdrawRecords.toString(),
          min_price_of_gas: {
            denom: params.minPriceOfGas.denom,
            amount: params.minPriceOfGas.amount
          }
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          inflationRewardsRatio: params.inflation_rewards_ratio,
          txFeeRebateRatio: params.tx_fee_rebate_ratio,
          maxWithdrawRecords: Long.fromString(params.max_withdraw_records),
          minPriceOfGas: {
            denom: params.min_price_of_gas.denom,
            amount: params.min_price_of_gas.amount
          }
        }
      };
    }
  }
};