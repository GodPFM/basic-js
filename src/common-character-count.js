const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const firstObject = getObjectOfChat(s1);
  const secondObject = getObjectOfChat(s2);
  let count = 0;
  if (Object.keys(firstObject).length > Object.keys(secondObject).length) {
    return getCountOfChar(firstObject, secondObject);
  }
  return getCountOfChar(secondObject, firstObject);
}

const getCountOfChar = (obj1, obj2) => {
  let count = 0;
  for (let char in obj1) {
    if (obj1[char] > obj2[char]) {
      count += obj2[char];
    } else if (obj1[char] <= obj2[char]) {
      count += obj1[char];
    }
  }
  return count;
}

const getObjectOfChat = (str) => {
  return str.split('').reduce((acc, letter) => {
    if (acc[letter]) {
      acc[letter]++;
    } else {
      acc[letter] = 1;
    }
    return acc;
  }, {});
}

module.exports = {
  getCommonCharacterCount
};
