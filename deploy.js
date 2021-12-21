const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'crack afford tattoo silver gadget unfair problem broccoli execute grit rich merge', // test Metamask wallet with test ETH
  'https://rinkeby.infura.io/v3/b63698a4df7c4a2497d508687d5bd4dd' // Infura endpoint
);
const web3 = new Web3(provider);
