const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let word = String(str);
  let result = '';
  let separator;
  let additionSeparator;
  let repeatTimes;
  let addition;
  let additionRepeatTimes;
  if (options.separator === undefined) {
    separator = '+';
  } else {
    separator = options.separator;
  }

  if (options.additionSeparator === undefined) {
    additionSeparator = '|';
  } else {
    additionSeparator = options.additionSeparator;
  }

  if (options.repeatTimes === undefined) {
    repeatTimes = 1;
  } else {
    repeatTimes = +options.repeatTimes;
  }

  if (options.addition === undefined) {
    addition = '';
  } else {
    addition = String(options.addition);
  }

  if (options.additionRepeatTimes === undefined) {
    additionRepeatTimes = 1;
  } else {
    additionRepeatTimes = +options.additionRepeatTimes;
  }

  let toAddAddition = '';

  if (addition !== '') {
    for (let i = 1; i <= additionRepeatTimes;i++) {
      if (additionRepeatTimes === i) {
        toAddAddition += addition;
      } else {
        toAddAddition += addition + additionSeparator;
      }
    }
  }

  for (let i = 1; i <= repeatTimes;i++) {
    if (i === repeatTimes) {
      result += word + toAddAddition;
    } else {
      result += word + toAddAddition + separator;
    }
  }

  return result;
}

module.exports = {
  repeater
};
