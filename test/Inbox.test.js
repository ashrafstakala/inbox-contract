const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor function / class
const web3 = new Web3(ganache.provider()); // instance of web3. Ganache provider for local test eth network. Other providers for other networks
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts(); // Etherium module of Web3 library

  // Use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface)) // tells web3 what methods the contract has and JSON parses the ABI to use as objects
    .deploy({ data: bytecode, arguments: ['Hi there!'] }) // defines the object, doesn't actually deploy
    .send({ from: accounts[0], gas: '1000000' }); // triggers the deploy to network
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address);
  });
});

////// Demo test
// class Car {
//   park() {
//     return 'stopped';
//   }
//   drive() {
//     return 'vroom';
//   }
// }

// let car;

// beforeEach(() => {
//   car = new Car();
// });

// describe('Car', () => {
//   it('can park', () => {
//     assert.equal(car.park(), 'stopped');
//   });

//   it('can drive', () => {
//     assert.equal(car.drive(), 'vroom');
//   });
// });
