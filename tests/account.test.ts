import { Coin } from "@cosmjs/proto-signing";
import { expect } from "chai";
import { CreateArchwayClient } from "../src/connect";
import { importWallet, CreateArchwaySigningClient, extractAddress} from "../src/index";


// Testing sending tokens from one account to another
test('testing sending tokens and balance query', async () => {
  let wallet = await importWallet("worth pencil mountain plug talk wink discover demise guess dish comic cloud alley trend game nurse era return canvas dry word primary turtle tattoo");
        let client = await CreateArchwaySigningClient(wallet);
        let read_client = await CreateArchwayClient();

        let balance_receiver_inital = await read_client.getBalance("archway1hymxhxrkyv933chdfwzkm450ytxcft33ekr8w9");
        await client.sendTokens("archway1hymxhxrkyv933chdfwzkm450ytxcft33ekr8w9",[{denom: "uconst", amount: "20000"}])
        let balance_receiver = await read_client.getBalance("archway1hymxhxrkyv933chdfwzkm450ytxcft33ekr8w9");
        expect(Number(balance_receiver.amount)).greaterThan(Number(balance_receiver_inital.amount))
})

