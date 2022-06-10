import { calculateFee } from "@cosmjs/stargate";
import { expect } from "chai";
import { CreateArchwaySigningClient, importWallet } from "../src";
import { CreateArchwayClient } from "../src/connect";

test('upload contract to Constantine Testnet', async () => {
    let wallet = await importWallet("mouse little fever ordinary orient near sadness dose state faculty delay glance run okay diesel tail symptom reason mushroom disagree strategy close cat hour");
    let client = await CreateArchwaySigningClient(wallet);
    let coin = await client.getBalance();
    console.log(coin)
    // If you run from root of arch3.js
    const fee = calculateFee(1000000,"0uconst");
    let reciept = await client.uploadContract("tests/smart-contract/arch3js_test-aarch64.wasm",fee);
    expect(reciept).exist
  })

test('instantiate template contract (code id 370) to Constantine Testnet', async () => {
    let wallet = await importWallet("mouse little fever ordinary orient near sadness dose state faculty delay glance run okay diesel tail symptom reason mushroom disagree strategy close cat hour");
    let client = await CreateArchwaySigningClient(wallet);
    const fee = calculateFee(1000000,"0uconst");
    let [InstantiateResult,contract] = await client.instantiateContract(370,{count: 0},fee);
    expect(InstantiateResult).exist
  })

  test('execute message on a testnet uploaded smart contract', async () => {
    let wallet = await importWallet("mouse little fever ordinary orient near sadness dose state faculty delay glance run okay diesel tail symptom reason mushroom disagree strategy close cat hour");
    let client = await CreateArchwaySigningClient(wallet);
    let read_client = await CreateArchwayClient();
    const fee = calculateFee(1000000,"0uconst");
    // Query smart contract before execution:
    const query = await read_client.queryContract("archway1dfxl39mvqlufzsdf089u4ltlhns6scgun6vf5mkym7cy0zpsrausequkm4",{get_count: {}});
    let result = await client.executeContract("archway1dfxl39mvqlufzsdf089u4ltlhns6scgun6vf5mkym7cy0zpsrausequkm4",{increment: {}},fee);
    const after_query = await read_client.queryContract("archway1dfxl39mvqlufzsdf089u4ltlhns6scgun6vf5mkym7cy0zpsrausequkm4",{get_count: {}});
    expect(query.count).eql(after_query.count - 1)
  })
