import { CreateArchwaySigningClient, importWallet } from "../src";

test('upload contract to Constantine Testnet', async () => {
    let wallet = await importWallet("worth pencil mountain plug talk wink discover demise guess dish comic cloud alley trend game nurse era return canvas dry word primary turtle tattoo");
    let client = await CreateArchwaySigningClient(wallet);
    let reciept = await client.uploadContract("tests/smart-contract/arch3js_test-aarch64.wasm");
    console.log(reciept)
  })