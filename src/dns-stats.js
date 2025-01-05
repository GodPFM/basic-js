const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arrWithSplit = domains.map((elem) => elem.split('.').reverse().join('.'));
  const resultObj = {};
  for (let i = 0; i < arrWithSplit.length; i++) {
    const dnsArr = arrWithSplit[i].split('.');
    for (let j = 0; j < dnsArr.length; j++) {
      const currentWord = '.' + dnsArr.slice(0, j + 1).join('.');
      if (resultObj[currentWord]) {
        resultObj[currentWord] += 1;
      } else {
        resultObj[currentWord] = 1;
      }
    }
  }
  return resultObj;
}

module.exports = {
  getDNSStats
};
