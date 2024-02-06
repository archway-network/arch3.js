import { SigningArchwayClient } from "@archwayhq/arch3-core";

import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";

const test = async() => {
  console.log('1111');


  const network = {
    chainId: 'constantine-3',
    endpoint: 'https://rpc.constantine.archway.io',
    prefix: 'archway',
  };
  // Get wallet and accounts from mnemonic
  const mnemonic = 'resource tell castle patrol pig plastic door tray able brass mixed bachelor';
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: network.prefix });
  const accounts = await wallet.getAccounts();
  const accountAddress = accounts[0].address;
  const signingClient = await SigningArchwayClient.connectWithSigner(network.endpoint, wallet);
  
  const response = await signingClient.signAndBroadcast(accountAddress, [
    {
          "typeUrl": "/cosmwasm.wasm.v1.MsgExecuteContract",
          "value": {
            "sender": "archway1nl03gr9rvrmvz5645w9exmh7vr65mpxu0nr5am",
            "contract": "archway1j9f2f0sh50yf50f9d3t7npq2usyzz9a963j9kw2e9sxfxrv829pqx2klny",
            "msg": "eyJtaW50Ijp7fX0=",
            "funds": [
              {
                "denom": "aconst",
                "amount": "250000000000000000"
              }
            ]
          }
        }
  ], "auto")

console.log(response)

  // [
  //   {
  //     "typeUrl": "/cosmwasm.wasm.v1.MsgExecuteContract",
  //     "value": {
  //       "sender": "archway1nl03gr9rvrmvz5645w9exmh7vr65mpxu0nr5am",
  //       "contract": "archway1j9f2f0sh50yf50f9d3t7npq2usyzz9a963j9kw2e9sxfxrv829pqx2klny",
  //       "msg": "eyJtaW50Ijp7fX0=",
  //       "funds": [
  //         {
  //           "denom": "aconst",
  //           "amount": "250000000000000000"
  //         }
  //       ]
  //     }
  //   }
  // ]
}

test()