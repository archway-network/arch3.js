/* eslint-disable */
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as archwayCallbackV1TxRegistry from "./callback/v1/tx.registry";
import * as archwayCwerrorsV1TxRegistry from "./cwerrors/v1/tx.registry";
import * as archwayCwfeesV1CwfeesRegistry from "./cwfees/v1/cwfees.registry";
import * as archwayCwicaV1TxRegistry from "./cwica/v1/tx.registry";
import * as archwayRewardsV1TxRegistry from "./rewards/v1/tx.registry";
import * as archwayCallbackV1TxAmino from "./callback/v1/tx.amino";
import * as archwayCwerrorsV1TxAmino from "./cwerrors/v1/tx.amino";
import * as archwayCwfeesV1CwfeesAmino from "./cwfees/v1/cwfees.amino";
import * as archwayCwicaV1TxAmino from "./cwica/v1/tx.amino";
import * as archwayRewardsV1TxAmino from "./rewards/v1/tx.amino";
export const archwayAminoConverters = {
  ...archwayCallbackV1TxAmino.AminoConverter,
  ...archwayCwerrorsV1TxAmino.AminoConverter,
  ...archwayCwfeesV1CwfeesAmino.AminoConverter,
  ...archwayCwicaV1TxAmino.AminoConverter,
  ...archwayRewardsV1TxAmino.AminoConverter
};
export const archwayProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...archwayCallbackV1TxRegistry.registry, ...archwayCwerrorsV1TxRegistry.registry, ...archwayCwfeesV1CwfeesRegistry.registry, ...archwayCwicaV1TxRegistry.registry, ...archwayRewardsV1TxRegistry.registry];
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
    registry: (registry as any),
    aminoTypes
  });
  return client;
};