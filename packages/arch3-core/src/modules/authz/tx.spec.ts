import { GenericAuthorization } from 'cosmjs-types/cosmos/authz/v1beta1/authz';
import { MsgGrant, MsgRevoke } from 'cosmjs-types/cosmos/authz/v1beta1/tx';
import { SendAuthorization } from 'cosmjs-types/cosmos/bank/v1beta1/authz';
import { MsgWithdrawDelegatorReward } from 'cosmjs-types/cosmos/distribution/v1beta1/tx';

import { createAuthzAminoConverters } from '.';

const aminoConverters = createAuthzAminoConverters();

const archwayd = {
  chainId: 'local-1',
  endpoint: 'http://localhost:26657',
  prefix: 'archway',
  denom: process.env.DENOM || 'aarch',
};

const granterAddress = 'archway1ecak50zhujddqd639xw4ejghnyrrc6jlwnlgwt';
const granteeAddress = 'archway1vrzhff4gnnye4qt37stn9v6xker333cdew6xdt';

describe('Amino converter for /cosmos.authz.v1beta1.MsgGrant', () => {
  describe('Grants generic authorization with /cosmos.authz.v1beta1.GenericAuthorization', () => {
    it('encodes and decodes back to the same value', () => {
      const message = {
        granter: granterAddress,
        grantee: granteeAddress,
        grant: {
          authorization: {
            typeUrl: GenericAuthorization.typeUrl,
            value: GenericAuthorization.encode(
              GenericAuthorization.fromPartial({
                msg: MsgWithdrawDelegatorReward.typeUrl,
              }),
            ).finish(),
          },
          expiration: undefined,
        },
      };
      const toAmino = aminoConverters[MsgGrant.typeUrl].toAmino(message);
      const result = aminoConverters[MsgGrant.typeUrl].fromAmino(toAmino);

      expect(message).toStrictEqual(result);
    });
  });
  describe('Grants send authorization with /cosmos.authz.v1beta1.SendAuthorization', () => {
    it('encodes and decodes back to the same value with an allowList', () => {
      const message = {
        granter: granterAddress,
        grantee: granteeAddress,
        grant: {
          authorization: {
            typeUrl: SendAuthorization.typeUrl,
            value: SendAuthorization.encode(
              SendAuthorization.fromPartial({
                spendLimit: [{ denom: archwayd.denom, amount: '1' }],
                allowList: [granteeAddress],
              }),
            ).finish(),
          },
          expiration: undefined,
        },
      };
      const toAmino = aminoConverters[MsgGrant.typeUrl].toAmino(message);
      const result = aminoConverters[MsgGrant.typeUrl].fromAmino(toAmino);

      expect(message).toStrictEqual(result);
    });
    it('encodes and decodes back to the same value without an allowList', () => {
      const message = {
        granter: granterAddress,
        grantee: granteeAddress,
        grant: {
          authorization: {
            typeUrl: SendAuthorization.typeUrl,
            value: SendAuthorization.encode(
              SendAuthorization.fromPartial({
                spendLimit: [{ denom: archwayd.denom, amount: '1' }],
              }),
            ).finish(),
          },
          expiration: undefined,
        },
      };
      const toAmino = aminoConverters[MsgGrant.typeUrl].toAmino(message);
      const result = aminoConverters[MsgGrant.typeUrl].fromAmino(toAmino);

      expect(message).toStrictEqual(result);
    });
  });
});

describe('Amino converter for /cosmos.authz.v1beta1.MsgRevoke', () => {
  it('encodes and decodes back to the same value', () => {
    const message = {
      granter: granterAddress,
      grantee: granteeAddress,
      msgTypeUrl: MsgWithdrawDelegatorReward.typeUrl,
    };
    const toAmino = aminoConverters[MsgRevoke.typeUrl].toAmino(message);
    const result = aminoConverters[MsgRevoke.typeUrl].fromAmino(toAmino);

    expect(message).toStrictEqual(result);
  });
});
