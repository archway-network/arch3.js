import { expect } from "chai";
import { importWallet, CreateArchwaySigningClient, extractAddress} from "../src/index";


// Testing sending tokens from one account to another
test('test', async () => {
  let wallet = await importWallet("worth pencil mountain plug talk wink discover demise guess dish comic cloud alley trend game nurse era return canvas dry word primary turtle tattoo");
        let client = await CreateArchwaySigningClient(wallet);
        let balance_initial = await client.getBalance();
        await client.sendTokens("archway1hymxhxrkyv933chdfwzkm450ytxcft33ekr8w9",[{denom: "uconst", amount: "20000"}])
        let balance_final = await client.getBalance();
})

// Testing delegating tokens to a validator
test('test', async () => {
  let wallet = await importWallet("worth pencil mountain plug talk wink discover demise guess dish comic cloud alley trend game nurse era return canvas dry word primary turtle tattoo");
        let client = await CreateArchwaySigningClient(wallet);
        let address = await extractAddress(wallet);
        await client.delegateTokens("archwayvaloper1t3zrk2vva33ajcut0rvjrtxchlynx7j5mmgj8m",{denom: "uconst", amount: "20000"})
        // Query balance staked
        let amount = await client.getStakedBalance(address);
})
