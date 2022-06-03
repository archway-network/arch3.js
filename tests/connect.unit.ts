import { expect } from "chai";
import {generateWallet, extractAddress} from "../src/index"

// Testing that generateWallet function actually generates a wallet
describe('generate a random wallet and check address', function() {
    it('generateWallet', async function() {
      let wallet = await generateWallet();
      // Remove comments to be able to view what wallet structure returns
      // console.log(wallet)
      let address_wallet = await extractAddress(wallet);
      let [{address}] = await wallet.getAccounts();
      expect(address).equal(address_wallet)
    }); 
  });

