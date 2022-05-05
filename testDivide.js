const { divide } = require('./divide.js');
const { runTests } = require('./testLib.js');
const assert = require('assert');

const divideByZero = () => {
  const actual = divide(4, 0);
  assert.strictEqual(actual, 'DivideByZero Error', 'Divide by zero');
};

const divisible = () => {
  const actual = divide(4, 2);
  assert.strictEqual(actual, 2, 'Dividend is divisible by divisor');
};

const notDivisible = () => {
  const actual = divide(4, 3);
  assert.strictEqual(actual, 1, 'Dividend is not divisible by divisor');
};

const tests = [divisible, notDivisible, divideByZero];
runTests(tests);
