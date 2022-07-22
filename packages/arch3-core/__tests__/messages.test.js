import { coin } from '@cosmjs/amino';
import { messages } from '../src/proto/osmosis/gamm/v1beta1/tx.messages';
import { archway, getSigningArchwayClient } from '../src/proto';

it('should set metadata for an Archway contract', async () => {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic("bomb civil pretty frame nasty mercy snack skill cool vanish wine explain champion chaos capital unusual urge major rude suggest kick antique other cable", { prefix: "archway" });
  const client = await getSigningArchwayClient("https://rpc.constantine-1.archway.tech", wallet);
  const address = await wallet.getAccounts();
  const addressStr = address[0].address;
  const contractAddress = "archway17p9rzwnnfxcjp32un9ug7yhhzgtkhvl9jfksztgw5uh69wac2pgssf05p7";
  const fee = calculateFee(1000000, "0uconst");
  const result = await client.addMetadata(addressStr, contractAddress, addressStr, addressStr, true, true, 50, fee);
  console.log(result);
  expect(result).toBeDefined()
});

it('messages.scoped', async () => {
  expect(
    osmosis.gamm.v1beta1.messages.joinPool({
      poolId: '606',
      sender: 'osmo1f4vxvvvvvvvvvv3luuddddddddddcccccccccc',
      shareOutAmount: '101010101',
      tokenInMaxs: [
        coin(
          10248,
          'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2'
        ),
        coin(
          64837969,
          'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228'
        )
      ]
    })
  ).toMatchSnapshot();
});
