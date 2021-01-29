import Web3 from "web3";
import Web3Modal from "web3modal";
import {rfBTC_abi, rfBTC_address, staking_abi} from './abi.js';


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
      const p = await web3.currentProvider;
      await p.enable();

      let rfBTC= new web3.eth.Contract(rfBTC_abi, rfBTC_address);
      let staking = new web3.eth.Contract(staking_abi, '0x2f80E76E714ab96D553930E3a42776B1fA85Ca6b');

      rfBTC.setProvider(p);
      staking.setProvider(p);
      let decimals = await rfBTC.methods.decimals().call();
      web3.utils.unitMap['rfbtc'] ='1' + '0'.repeat(decimals);

      return {rfBTC, staking, web3};
}

export default getWeb3;
