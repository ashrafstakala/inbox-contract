const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor function / class
const web3 = new Web3(ganache.provider()); // instance of web3. Ganache provider for local test eth network. Other providers for other networks

beforeEach(() => {
  // Get a list of all accounts
  web3.eth
    .getAccounts() // Etherium module of Web3 library
    .then(fetchedAccounts => {
      console.log(fetchedAccounts);
    });

  // Use one of those accounts to deploye the contract
});

describe('Inbox', () => {
  it('deploys a contract', () => {});
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
