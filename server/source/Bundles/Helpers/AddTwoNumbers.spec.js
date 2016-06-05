import AddTwoNumbers from './AddTwoNumbers';
import {Chai, expect} from 'chai';


describe('Testing the AddTwoNumbers()', () => {
  it('should return sum of 10 by adding 5 + 5', () => {
    expect( AddTwoNumbers(5, 5) ).to.equal(10);
  });

  it('should return sum of 10 by adding 10 + 0', () => {
    expect( AddTwoNumbers(10, null)).to.equal(10);
  });
});
