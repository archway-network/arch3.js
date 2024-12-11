import { AminoConverters } from "@cosmjs/stargate";
import { GenericAuthorization } from "cosmjs-types/cosmos/authz/v1beta1/authz";
import { MsgGrant, MsgRevoke } from "cosmjs-types/cosmos/authz/v1beta1/tx";
import { SendAuthorization } from "cosmjs-types/cosmos/bank/v1beta1/authz";
import { Timestamp } from "cosmjs-types/google/protobuf/timestamp";
import { fromJsonTimestamp, fromTimestamp } from "cosmjs-types/helpers";

export function createAuthzAminoConverters(): AminoConverters {
  return {
    [MsgGrant.typeUrl]: {
      aminoType: "cosmos-sdk/MsgGrant",
      toAmino: ({ granter, grantee, grant }) => {
        if (!grant || !grant.authorization) {
          throw new Error(`Unsupported grant type: '${grant?.authorization?.typeUrl}'`);
        }
        let authorizationValue;
        switch (grant?.authorization?.typeUrl) {
          case GenericAuthorization.typeUrl: {
            const generic = GenericAuthorization.decode(grant.authorization.value);
            authorizationValue = {
              type: "cosmos-sdk/GenericAuthorization",
              value: {
                msg: generic.msg,
              },
            };
            break;
          }
          case SendAuthorization.typeUrl: {
            const spend = SendAuthorization.decode(grant.authorization.value);
            authorizationValue = {
              type: "cosmos-sdk/SendAuthorization",
              value: {
                spend_limit: spend.spendLimit,
              },
            };
            break;
          }
          default:
            throw new Error(`Unsupported grant type: '${grant.authorization.typeUrl}'`);
        }
        const expiration = grant.expiration?.seconds;

        return {
          granter,
          grantee,
          grant: {
            authorization: authorizationValue,
            expiration: grant.expiration
              ? fromTimestamp(grant.expiration)
                  .toISOString()
                  .replace(/\.\d{3}Z$/, "Z")
              : undefined,
          },
        };
      },
      fromAmino: ({ granter, grantee, grant }) => {
        const authorizationType = grant?.authorization?.type;
        let authorizationValue;
        switch (authorizationType) {
          case "cosmos-sdk/GenericAuthorization": {
            authorizationValue = {
              typeUrl: GenericAuthorization.typeUrl,
              value: GenericAuthorization.encode({
                msg: grant.authorization.value.msg,
              }).finish(),
            };
            break;
          }
          case "cosmos-sdk/SendAuthorization": {
            authorizationValue = {
              typeUrl: SendAuthorization.typeUrl,
              value: SendAuthorization.encode(
                SendAuthorization.fromPartial({
                  spendLimit: grant.authorization.value.spend_limit,
                }),
              ).finish(),
            };
            break;
          }
          default:
            throw new Error(`Unsupported grant type: '${grant?.authorization?.type}'`);
        }
        return MsgGrant.fromPartial({
          granter,
          grantee,
          grant: {
            authorization: authorizationValue,
            expiration: grant.expiration ? Timestamp.fromPartial(fromJsonTimestamp(grant.expiration)) : undefined,
          },
        });
      },
    },
    [MsgRevoke.typeUrl]: {
      aminoType: "cosmos-sdk/MsgRevoke",
      toAmino: ({ granter, grantee, msgTypeUrl }) => ({
        granter,
        grantee,
        msg_type_url: msgTypeUrl,
      }),
      fromAmino: ({ granter, grantee, msg_type_url }) =>
        MsgRevoke.fromPartial({
          granter,
          grantee,
          msgTypeUrl: msg_type_url,
        }),
    },
  };
}
