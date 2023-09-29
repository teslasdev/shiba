import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";

export const providerOptions = {
 walletconnect: {
   package: WalletConnect, 
   options: {
     infuraId: '63c844b269a94e78b537f7aa207998c3'
   }
 }
};