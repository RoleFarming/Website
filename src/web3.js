import Web3 from "web3";
import Web3Modal from "web3modal";


import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "INFURA_ID" // required
        }
    }
};
const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
});



let web3;
async function getWeb3() {
      if (!web3 ) { 
        const provider = web3Modal.connect();
        web3 = new Web3(provider); 
      }
      return web3;
}

export default getWeb3;
