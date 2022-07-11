"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useArchwayKeplr = void 0;
const config_1 = require("./config");
const connect_1 = require("./connect");
const react_1 = require("react");
function useArchwayKeplr() {
    // state vars
    const [account, setAccount] = (0, react_1.useState)('');
    const [active, setActive] = (0, react_1.useState)(false);
    const [signer, setSigner] = (0, react_1.useState)();
    const [client, setClient] = (0, react_1.useState)();
    const [addressPrefix, setAddressPrefix] = (0, react_1.useState)("");
    const [readOnlyClient, setReadOnlyClient] = (0, react_1.useState)();
    const chainConfig = config_1.configs.testnet;
    (0, react_1.useEffect)(() => {
        setup();
        window.addEventListener("keplr_keystorechange", () => {
            activateBrowserWallet();
        });
        // eslint-disable-next-line
    }, []);
    const setup = () => __awaiter(this, void 0, void 0, function* () {
        // setup client for reading chain data without connected wallet
        const readOnlyClient = yield (0, connect_1.CreateArchwayClient)();
        setReadOnlyClient(readOnlyClient);
    });
    const disconnect = () => __awaiter(this, void 0, void 0, function* () {
        // update state vars
        setAccount(undefined);
        setAddressPrefix(undefined);
        setSigner(undefined);
        setClient(undefined);
        setActive(false);
    });
    // activate kepler
    const activateBrowserWallet = () => __awaiter(this, void 0, void 0, function* () {
        let err = "";
        // get injected keplr instance
        const globalWindow = window;
        if (globalWindow.keplr) {
            const keplr = globalWindow.keplr;
            yield keplr.experimentalSuggestChain(chainConfig);
            const chainId = chainConfig.chainId;
            yield keplr.enable(chainId);
            const offlineSigner = yield keplr.getOfflineSignerAuto(chainId);
            const accounts = yield offlineSigner.getAccounts();
            // setup client with rpc and signer
            const client = yield (0, connect_1.CreateArchwaySigningClient)(offlineSigner);
            // update state vars
            setAccount(accounts[0].address);
            setAddressPrefix(chainConfig.addressPrefix);
            setSigner(offlineSigner);
            setClient(client);
            setActive(true);
            console.log("keplr activated");
            return err;
        }
        else {
            err = "Please install Keplr wallet";
            return err;
        }
    });
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
    };
}
exports.useArchwayKeplr = useArchwayKeplr;
