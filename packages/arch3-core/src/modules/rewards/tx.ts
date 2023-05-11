import { archway } from '@archwayhq/arch3-proto';
import type { AminoConverters } from '@cosmjs/stargate';

export const rewardsTypes = archway.rewards.v1.registry;

export const createRewardsAminoConverters: () => AminoConverters = () => archway.rewards.v1.AminoConverter;

/**
 * Encodes the transaction messages for the `x/rewards` module.
 */
export const RewardsMsgEncoder = archway.rewards.v1.MessageComposer.fromPartial;
