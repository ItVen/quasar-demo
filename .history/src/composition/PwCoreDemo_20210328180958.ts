/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import PWCore, {
  Web3ModalProvider,
  PwCollector,
  ChainID,
  Address,
  Amount,
  AddressType,
} from '@lay2/pw-core';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import supported from 'src/composition/chains'
let pw = {};
interface chainsModel{
    name:string,
    short_name: string,
    chain: string,
    network: string,
    chain_id: number,
    network_id: number,
    rpc_url: string,
    native_currency: {
      symbol: string,
      name: string,
      decimals: string,
      contractAddress: string,
      balance: string,
    },
}

// CKB 主网：https://mainnet.ckb.dev
// CKB 测试网：https://testnet.ckb.dev
const url = 'https://testnet.ckb.dev';
// todo 检查是否有web3模块
let web3Modal = null;
let web3 = null;
const chainId = 1;
function haveWeb3():Web3Modal{
  web3Modal = new Web3Modal({
      network: getNetwork(),
      cacheProvider: true,
    });
    return web3Modal
}
// todo 检查区块所属网络
function getNetwork():string{
  return getChainData(chainId).network;
}
// todo 查看区块信息
function getChainData(chainId:number):chainsModel{
  const chainData = supported.filter((chain)=>chain.chain_id == chainId)[0]
  if (!chainData) {
      throw new Error('ChainId missing or not supported');
    }
  const API_KEY = '89a648e271d54224ba4827d348cbaa54'; // 不知道上什么的api key
  if (chainData.rpc_url.includes('infura.io') && chainData.rpc_url.includes('%API_KEY%') && API_KEY) {
    const rpcUrl = chainData.rpc_url.replace('%API_KEY%', API_KEY);
    return {
      ...chainData,
      rpc_url: rpcUrl,
    };
  }
  return chainData;
}

interface pwdata{
  ckbBalance:Amount | null,
  address:string|undefined

} 
export async function test():Promise<pwdata> {
   web3Modal = haveWeb3();
  console.log(web3Modal, web3Modal.cachedProvider);
  if (web3Modal.cachedProvider) {
      const provider = await web3Modal.connect();
      web3 = new Web3(provider);
      console.log('web3:',web3);
      pw = await new PWCore(url).init(
        new Web3ModalProvider(web3),
        new PwCollector('https://cellapitest.ckb.pw')
      );
      const ethAddress = PWCore.provider.address.addressString
      console.log('ethAddress:',ethAddress);
      // 获取ckb 地址
      const address = PWCore.provider.address.toCKBAddress();
      // 获取账户余额
      console.log('ckbaddress:',address);
      const ckbBalance = await PWCore.defaultCollector.getBalance(PWCore.provider.address)
      console.log(ckbBalance.toString()); 
      return {
        ckbBalance,
        address
      }
  }else{
    return {
        ckbBalance:null,
        address:undefined
      }
   
  }
  
}