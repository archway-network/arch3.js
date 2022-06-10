import { calculateFee } from "@cosmjs/stargate";
import { CreateArchwaySigningClient, importWallet } from "../src";

test('upload contract to Constantine Testnet', async () => {
    let wallet = await importWallet("mouse little fever ordinary orient near sadness dose state faculty delay glance run okay diesel tail symptom reason mushroom disagree strategy close cat hour");
    let client = await CreateArchwaySigningClient(wallet);
    let coin = await client.getBalance();
    console.log(coin)
    // If you run from root of arch3.js
    const fee = calculateFee(1000000,"0uconst");
    let reciept = await client.uploadContract("tests/smart-contract/arch3js_test-aarch64.wasm",fee);
    console.log(reciept)
  })
