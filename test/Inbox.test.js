const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor function / class
const web3 = new Web3(ganache.provider()); // instance of web3. Ganache provider for local test eth network. Other providers for other networks

class Car {
  park() {
    return 'stopped';
  }
  drive() {
    return 'vroom';
  }
}

describe('Car', () => {
  it('can park', () => {
    const car = new Car();
    assert.equal(car.park(), 'stopped');
  });
});
