import { Coin, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import {SigningStargateClient, StargateClient, assertIsDeliverTxSuccess } from "@cosmjs/stargate";
import { extractAddress, ArchwaySigningClient, ArchwayClient } from "./connect";

// Get balance of an address
ArchwayClient.prototype.getBalance = async function(address: string ) {
    const balance = await this.client.getBalance(address, "uconst");
    return balance
}

// Get the staked balance of an address
ArchwayClient.prototype.getStakedBalance = async function(delegator_address: string ) {
    const balance = await this.client.getBalanceStaked(delegator_address);
    return balance
}

// Get block details at a certain height

