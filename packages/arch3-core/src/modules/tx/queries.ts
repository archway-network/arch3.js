import { Any } from '@archwayhq/arch3-proto/build/google/protobuf/any';
import { Pubkey } from '@cosmjs/amino';
import { EncodeObject, encodePubkey } from '@cosmjs/proto-signing';
import { QueryClient } from '@cosmjs/stargate';
import { createProtobufRpcClient } from '@cosmjs/stargate/build/queryclient';
import { SignMode } from 'cosmjs-types/cosmos/tx/signing/v1beta1/signing';
import {
  SimulateRequest,
  GetTxResponse,
  SimulateResponse,
  ServiceClientImpl,
} from 'cosmjs-types/cosmos/tx/v1beta1/service';
import { Fee, Tx, TxBody, AuthInfo } from 'cosmjs-types/cosmos/tx/v1beta1/tx';

export interface TxExtension {
  readonly tx: {
    getTx: (txId: string) => Promise<GetTxResponse>;
    simulate: (
      messages: readonly Any[],
      memo: string | undefined,
      signer: Pubkey,
      sequence: number,
      granter: string,
      payer: string,
    ) => Promise<SimulateResponse>;
  };
}

/**
 * Creates a tx extension for the given {@link QueryClient}.
 *
 * @param base - The base query client to use for RPC queries.
 * @returns A {@link TxExtension}.
 */
export function setupTxExtension(base: QueryClient): TxExtension {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);

  return {
    tx: {
      getTx: async (txId: string) => {
        const request = {
          hash: txId,
        };
        const response = await queryService.GetTx(request);
        return response;
      },
      simulate: async (
        messages: readonly EncodeObject[],
        memo: string | undefined,
        signer: Pubkey,
        sequence: number,
        granter?: string,
        payer?: string,
      ) => {
        const tx = Tx.fromPartial({
          authInfo: AuthInfo.fromPartial({
            fee: Fee.fromPartial({
              granter,
              payer,
            }),
            signerInfos: [
              {
                publicKey: encodePubkey(signer),
                sequence: BigInt(sequence),
                modeInfo: { single: { mode: SignMode.SIGN_MODE_UNSPECIFIED } },
              },
            ],
          }),
          body: TxBody.fromPartial({
            messages: Array.from(messages),
            memo: memo,
          }),
          signatures: [new Uint8Array()],
        });
        const request = SimulateRequest.fromPartial({
          txBytes: Tx.encode(tx).finish(),
        });
        const response = await queryService.Simulate(request);
        return response;
      },
    },
  };
}
