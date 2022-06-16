import { calculateFee } from "@cosmjs/stargate";
import { expect } from "chai";
import { CreateArchwaySigningClient, extractAddress, importWallet } from "../src/connect";

test('add metadata to instantiated smart contract ', async () => {
    let wallet = await importWallet("mouse little fever ordinary orient near sadness dose state faculty delay glance run okay diesel tail symptom reason mushroom disagree strategy close cat hour");
    let address = await extractAddress(wallet);
    let client = await CreateArchwaySigningClient(wallet);
    const fee = calculateFee(1000000,"0uconst");
    let result = await client.addMetadata("archway1dfxl39mvqlufzsdf089u4ltlhns6scgun6vf5mkym7cy0zpsrausequkm4",address,address,true,true,50,fee);
    console.log(result)
    expect(result).exist
  })