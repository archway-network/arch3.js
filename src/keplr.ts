import { OfflineSigner } from "@cosmjs/proto-signing";
import {configs} from "./config";
import { ArchwaySigningClient, CreateArchwayClient, CreateArchwaySigningClient } from "./connect";
import { ArchwayClient } from "./query";
import { useEffect, useState } from "react";

export function useArchwayKeplr() {

    // state vars
    const [account, setAccount] = useState<string | undefined>('');
    const [active, setActive] = useState<boolean>(false);
    const [signer, setSigner] = useState<OfflineSigner | undefined>();
    const [client, setClient] = useState<ArchwaySigningClient>();
    const [addressPrefix, setAddressPrefix] = useState<string | undefined>("");
    const [readOnlyClient, setReadOnlyClient] = useState<ArchwayClient>();
    const chainConfig = configs.testnet;
  
    useEffect(() => {
      setup();
      window.addEventListener("keplr_keystorechange", () => {
        activateBrowserWallet();  
      })
    // eslint-disable-next-line
    }, []);
  
    const setup = async () => {
      // setup client for reading chain data without connected wallet
      const readOnlyClient = await CreateArchwayClient();
      setReadOnlyClient(readOnlyClient);
    }
  
    const disconnect = async () => {
      // update state vars
      setAccount(undefined);
      setAddressPrefix(undefined);
      setSigner(undefined);
      setClient(undefined);
      setActive(false); 
    }
  
    // activate kepler
    const activateBrowserWallet = async () => { 
  
      let err = "";
      // get injected keplr instance
      const globalWindow:any = window;
      if (globalWindow.keplr) {
        const keplr = globalWindow.keplr;
        await keplr.experimentalSuggestChain(chainConfig);
        const chainId = chainConfig.chainId;
        await keplr.enable(chainId);
        const offlineSigner = await keplr.getOfflineSignerAuto(chainId);
        const accounts = await offlineSigner.getAccounts();
  
        // setup client with rpc and signer
        const client = await CreateArchwaySigningClient(offlineSigner);
  
        // update state vars
        setAccount(accounts[0].address);
        setAddressPrefix(chainConfig.addressPrefix);
        setSigner(offlineSigner);
        setClient(client);
        setActive(true);
  
        return err;
      } else {
        err = "Please install Keplr wallet"
        return err;
      }
    }
  
    return { 
      activateBrowserWallet, 
      disconnect,
      addressPrefix,
      account,
      active,
      signer,
      client,
      readOnlyClient,
      chainConfig
    }
  
  }


