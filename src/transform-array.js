const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let result = [];
  let isNextDouble = false;
  let isNextDiscard = false;
  let isDiscarded = false;
  arr.forEach((element) => {
    if (typeof element === 'string') {
      if (element.includes('--')) {
        let action = element.match(/\w{1,}/g);
        if (action[0] === 'double') {
          if (action[1] === 'next') {
            isNextDouble = true;
          }
          if (action[1] === 'prev' && result.length != 0) {
            if (!isDiscarded) {
              result.push(result[result.length-1]);
            } else {
              isDiscarded = false;
            }
          }
          return;
        }

        if (action[0] === 'discard') {
          if (action[1] === 'next') {
            isNextDiscard = true;
          }
          if (action[1] === 'prev' && result.length != 0) {
            if (!isDiscarded) {
              result.pop();
            } else {
              isDiscarded = false;
            }
          }
          return;
        }
        result.push(element);
        return;
      }
    }
    if (isNextDouble) {
      result.push(element);
      isNextDouble = false;
    }
    if (isNextDiscard) {
      isNextDiscard = false;
      isDiscarded = true;
      return;
    }
    result.push(element);
  })

  return result;
}

module.exports = {
  transform
};
