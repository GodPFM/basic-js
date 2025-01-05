const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let temp = str.charAt(0);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    while (temp === str.charAt(i)) {
      count += 1;
      i++;
    }
    if (count === 1) {
      result += temp;
    } else {
      result += `${count + temp}`;
    }
    temp = str.charAt(i);
    count = 1;
    if (i === str.length - 1) {
      result += temp;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
