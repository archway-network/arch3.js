import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { calculateFee } from "@cosmjs/stargate";

import { ArchwayClient, ArchwaySigningClient } from "./archwayclient";

describe('archwayClient', () => {
  describe('metadata', () => {
    describe('set', () => {
      it('should set metadata for an Archway contract', async () => {
        const wallet = await DirectSecp256k1HdWallet.fromMnemonic("bomb civil pretty frame nasty mercy snack skill cool vanish wine explain champion chaos capital unusual urge major rude suggest kick antique other cable", { prefix: "archway" });
        const client: ArchwaySigningClient = await ArchwaySigningClient.connectSigner("https://rpc.constantine-1.archway.tech", wallet);
        const address = await wallet.getAccounts();
        const addressStr = address[0].address;
        const contractAddress = "archway17p9rzwnnfxcjp32un9ug7yhhzgtkhvl9jfksztgw5uh69wac2pgssf05p7";
        const fee = calculateFee(1000000, "0uconst");
        const result = await client.addMetadata(addressStr, contractAddress, addressStr, addressStr, true, true, 50, fee);
        console.log(result);
        expect(result).toBeDefined()
      });
    });

    describe('get', () => {
      it('should query metadata from an Archway contract', async () => {
        const client = await ArchwayClient.connect("https://rpc.constantine-1.archway.tech");
        const contractAddress = "archway17p9rzwnnfxcjp32un9ug7yhhzgtkhvl9jfksztgw5uh69wac2pgssf05p7";
        const result = await client.queryDeveloperRewards(contractAddress);
        console.log(result);
        expect(result).toBeDefined()
      });

    });
  });
});
