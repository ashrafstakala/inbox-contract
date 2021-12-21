const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'crack afford tattoo silver gadget unfair problem broccoli execute grit rich merge', // test Metamask wallet with test ETH
  'https://rinkeby.infura.io/v3/b63698a4df7c4a2497d508687d5bd4dd' // Infura API endpoint
);

const web3 = new Web3(provider); // contract instance

//creating this function purely to use async await
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to depoy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address); // to identify where the instance of our contract was deployed
  provider.engine.stop(); // to prevent deployment from hanging
};
deploy();
