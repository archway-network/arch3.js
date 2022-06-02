import { expect } from "chai";
import generateWallet from "../src/connect"
describe('generate a random wallet', function() {
    it('generateWallet', function() {
      let wallet = generateWallet();
      expect(wallet).exist;
    }); 
  });