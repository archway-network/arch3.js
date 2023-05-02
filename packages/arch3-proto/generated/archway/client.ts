/* eslint-disable */
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as archwayRewardsV1beta1TxRegistry from "./rewards/v1beta1/tx.registry";
import * as archwayRewardsV1beta1TxAmino from "./rewards/v1beta1/tx.amino";
export const archwayAminoConverters = {
  ...archwayRewardsV1beta1TxAmino.AminoConverter
};
export const archwayProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...archwayRewardsV1beta1TxRegistry.registry];
export const getSigningArchwayClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...archwayProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...archwayAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningArchwayClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningArchwayClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};