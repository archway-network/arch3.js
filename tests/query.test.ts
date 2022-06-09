import { Coin } from "@cosmjs/proto-signing";
import { expect } from "chai";
import { CreateArchwayClient, CreateArchwaySigningClient, CreateReadOnlyClientTestnet } from "../src/connect";
import {generateWallet, extractAddress, importWallet, CreateSigningClientTestnet, ArchwayTXSearch , ArchwayTxFilter} from "../src/index"

// Keep constant wallet with constant balance 
test('query read only client for balance', async () => {
    let client = await CreateArchwayClient();
    let balance_final = await client.getBalance("archway1eu6lzhe8hyt7yyd7ygyc7d5h2hpxwxt2ghaykk");
    expect(balance_final).eql({denom: "uconst", amount: "1000000"})
  })

// Query current block of the blockchain
test('query read only client for balance', async () => {
  let client = await CreateArchwayClient();
  let block = await client.getBlock(1000);
  expect(block.id).eql("20CBCA8475F18567BBA8B329D86C20A81155F7FDCFF953E874D6BBEDB46D8071")
})

// Query Chain-ID of Archway Testnet
test('query chain-id', async () => {
  let client = await CreateArchwayClient();
  let chain = await client.getChainID();
  expect(chain).eql("constantine-1")
})


// Query Latest BlockHeight of the chain
test('query block height', async () => {
  let client = await CreateArchwayClient();
  let height = await client.getBlockHeight();
  expect(height).greaterThan(1000);
})

// Get transaction from TX hash
test('get tx hash', async () => {
  let client = await CreateArchwayClient();
  let tx = await client.getTX("9BF55B89E31B99DBA48CA05784A1F09FB007170CA3F95390AE7011946CF38C0F");
  let log = JSON.parse(tx.rawLog);
  let type = log[0].events[0].type;

  console.log(type)
  expect(type).eql("coin_received")
 
})

// Search for a certain TX
test('get tx from txsearch', async () => {
  let client = await CreateArchwayClient();
  let search: ArchwayTXSearch = {sentFromOrTo: "archway1hymxhxrkyv933chdfwzkm450ytxcft33ekr8w9"}
  let txs = await client.searchTx(search);
  // Need to create assumption that number of transactions for that address will remain constant
  expect(txs.length).eql(24)

})


