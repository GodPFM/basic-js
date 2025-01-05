const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = 0;
  let stringNumber = n.toString();
  for (let i = 0; i < stringNumber.length; i++) {
    let newNumber = Number(stringNumber.slice(0, i) + stringNumber.slice(i + 1));
    maxNumber = Math.max(maxNumber, newNumber);
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
