import { expect } from "chai";
import generateWallet from "../src/connect"
describe('calculate', function() {
    it('add', function() {
      let wallet = generateWallet();
      expect(wallet).exist;
    }); 
  });