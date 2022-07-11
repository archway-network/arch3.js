import { CosmWasmClient, SigningCosmWasmClient, SigningCosmWasmClientOptions } from '@cosmjs/cosmwasm-stargate';
import { toAscii } from "@cosmjs/encoding";
import { EncodeObject, OfflineSigner } from '@cosmjs/proto-signing';
import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';

type ContractInstanceMetadata = {
  developerAddress: string,
  rewardAddress: string,
  gasRebate: boolean,
  collectPremium: boolean,
  premiumPercentageCharged: number
}

type MsgSetContractMetadata = {
  sender: string,
  contractAddress: string,
  metadata: ContractInstanceMetadata
}

export interface MsgSetContractMetadataEncodeObject extends EncodeObject {
  readonly typeUrl: "/archway.gastracker.v1.MsgSetContractMetadata";
  readonly value: Partial<MsgSetContractMetadata>;
}

export class ArchwayClient extends CosmWasmClient {
  protected constructor(tmClient: Tendermint34Client | undefined) {
    super(tmClient);
  }

  public async queryDeveloperRewards(contractAddress: string): Promise<any> {
    const queryClient = this.getQueryClient();
    const pendingContractInstanceMetadataKeyPrefix = new Uint8Array([0x01]);

    const key = Uint8Array.from([
      ...pendingContractInstanceMetadataKeyPrefix,
      ...toAscii(contractAddress),
    ]);
    const ans = await queryClient.queryVerified(
      "gastracker",
      key
    );
    return ans;
  }
}

export class ArchwaySigningClient extends SigningCosmWasmClient {
  protected constructor(tmClient: Tendermint34Client | undefined, signer: OfflineSigner, options: SigningCosmWasmClientOptions) {
    super(tmClient, signer, options);
  }

  public async addMetadata(
    userAddress: string,
    contractAddress:string,
    developerAddress: string,
    rewardAddress: string,
    gasRebate: boolean,
    collectPremium: boolean,
    premiumPercentageCharged: number,
    fee: StdFee
  ): Promise<DeliverTxResponse> {
    const message : MsgSetContractMetadataEncodeObject = {
      typeUrl: "/archway.gastracker.v1.MsgSetContractMetadata",
      value: {
        sender: userAddress,
        contractAddress: contractAddress,
        metadata: {
          developerAddress,
          rewardAddress,
          gasRebate,
          collectPremium,
          premiumPercentageCharged
        }
      }
    };
    const txResponse = await this.signAndBroadcast(userAddress, [message], fee);
    return txResponse;
  }


}
