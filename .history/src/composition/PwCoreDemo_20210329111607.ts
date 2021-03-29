
import PWCore, {
  Web3ModalProvider,
  PwCollector,
  Address,
  Amount,
  AddressType,
} from '@lay2/pw-core';
import Web3 from 'web3';
import Web3Modal from 'web3modal';
import supported from 'src/composition/chains'

interface ChainsModel{
    name:string,
    shortName: string,
    chain: string,
    network: string,
    chainId: number,
    networkId: number,
    rpcUrl: string,
    nativeCurrency: {
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
let web3Modal:Web3Modal|undefined = undefined;
let web3:Web3|undefined = undefined;
let pw :PWCore|undefined = undefined;
const chainId = 1;
function haveWeb3():Web3Modal{
  web3Modal = new Web3Modal({
      network: getNetwork(),
      cacheProvider: true,
    });
    return web3Modal
}
function getNetwork():string{
  return getChainData(chainId).network;
}

/**
 * 根据chainId 返回支持的区块信息
 * @param chainId 
 * @returns 
 */ 
function getChainData(chainId:number):ChainsModel{
  const chainData = supported.filter((chain)=>chain.chainId == chainId)[0]
  if (!chainData) {
      throw new Error('ChainId missing or not supported');
    }
  const API_KEY = '89a648e271d54224ba4827d348cbaa54'; // 不知道上什么的api key
  if (chainData.rpcUrl.includes('infura.io') && chainData.rpcUrl.includes('%API_KEY%') && API_KEY) {
    const rpcUrl = chainData.rpcUrl.replace('%API_KEY%', API_KEY);
    return {
      ...chainData,
      rpcUrl: rpcUrl,
    };
  }
  return chainData;
}
interface PWCoreData{
  ckbBalance:Amount | null,
  address:string|undefined

} 

export async function initPWCore(web3Modal:Web3Modal):Promise<PWCoreData> {
  web3Modal = haveWeb3();
  console.log('web3Modal');
  console.log(web3Modal);
  if (web3Modal.cachedProvider) {
     console.log('--in-------');
      web3 = new Web3(await web3Modal.connect());
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
  }
  console.log('-----out----');
  return {
        ckbBalance:null,
        address:undefined
      }
}
// 发起交易
export async function send(address: string,
    amount: string):Promise<string>{
    if(!pw) return ''
    const txHash = await pw.send(new Address(address, AddressType.ckb),new Amount(amount));
    return txHash
}