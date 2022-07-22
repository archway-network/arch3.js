import { archway, getSigningArchwayClient } from '../src/proto';
import {DirectSecp256k1HdWallet} from "@cosmjs/proto-signing";
import { calculateFee } from "@cosmjs/stargate";

it('should set metadata for an Archway contract', async () => {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic("bomb civil pretty frame nasty mercy snack skill cool vanish wine explain champion chaos capital unusual urge major rude suggest kick antique other cable", { prefix: "archway" });
  const client = await getSigningArchwayClient({rpcEndpoint: "https://rpc.constantine-1.archway.tech",
  signer: wallet});
  const address = await wallet.getAccounts();
  const addressStr = address[0].address;
  const contractAddress = "archway17p9rzwnnfxcjp32un9ug7yhhzgtkhvl9jfksztgw5uh69wac2pgssf05p7";
  const fee = calculateFee(1000000, "0uconst");
  const {setContractMetadata} = archway.gastracker.v1.MessageComposer.withTypeUrl;
  const msg = setContractMetadata({
    sender: addressStr,
    contractAddress: contractAddress,
    metadata: {
      developerAddress: addressStr,
      rewardAddress: addressStr,
      gasRebateToUser: false,
      collectPremium: true,
      premiumPercentageCharged: 1
    }
  });
  const result = await client.signAndBroadcast(addressStr,[msg],fee);
  console.log(result);
  expect(result).toBeDefined()
});

