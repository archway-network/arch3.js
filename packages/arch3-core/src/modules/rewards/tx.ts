import { AminoConverter } from '@archwayhq/arch3-proto/archway/rewards/v1/tx.amino';
import { MessageComposer } from '@archwayhq/arch3-proto/archway/rewards/v1/tx.registry';
import type { AminoConverters } from '@cosmjs/stargate';

export { registry as rewardsTypes } from '@archwayhq/arch3-proto/archway/rewards/v1/tx.registry';

export const createRewardsAminoConverters: () => AminoConverters = () => AminoConverter;

/**
 * Encodes the transaction messages for the `x/rewards` module.
 */
export const RewardsMsgEncoder = MessageComposer.fromPartial;
