const Web3 = require('web3');
import abi from './abi'
export var web3 = new Web3();

web3 = new Web3(new Web3.providers.HttpProvider("http://54.255.224.128:8545"));

web3.eth.defaultAccount = web3.eth.accounts[0];
const PatientRecordContract = web3.eth.contract(abi);
export const contract = PatientRecordContract.at('0xbab58bf0be15bf5b3b1fea6a023fa99de0d39aa4');
