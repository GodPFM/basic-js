const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

  constructor(isReverse) {
    this.isReverse = isReverse;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.square = [];
    for (let i = 0; i < this.alphabet.length;i++) {
      let secondPart = this.alphabet.slice(i);
      secondPart += this.alphabet.slice(0, i);
      this.square.push(secondPart);
    }
  }

  encrypt(word,key) {
    if (word === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let message = word.replace(/\W|\d/g, '').toUpperCase();
    let keyWord = key;
    let count = 0;
    while (message.length > keyWord.length) {
      keyWord += keyWord[count];
      if (count === (key.length - 1)) {
        count = 0;
      } else {
        count++;
      }
    }

    keyWord = keyWord.toUpperCase();
    let cryptedWord = '';

    for (let i = 0; i < message.length;i++) {
      let indexOfWordLetter = this.alphabet.indexOf(message[i]);
      let indexOfKeyLetter = this.alphabet.indexOf(keyWord[i]);
      cryptedWord += this.square[indexOfKeyLetter][indexOfWordLetter];
    }

    let result = '';
    let indexOfSymbol = 0;

    for (let i = 0; i < word.length;i++) {
      if (word[i].match(/[A-z]/g) === null || word[i].match(/[\^]/g) !== null) {
        indexOfSymbol++;
        result += word[i];
        continue;
      } else {
        result += cryptedWord[i - indexOfSymbol];
      }
    }
    if (this.isReverse === false) {
      return result.split("").reverse().join("");
    }
    return result;
  }
  decrypt(word,key) {
    if (word === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let message = word.replace(/\W|\d/g, '').toUpperCase();
    let keyWord = key;
    let count = 0;
    while (message.length > keyWord.length) {
      keyWord += keyWord[count];
      if (count === (key.length - 1)) {
        count = 0;
      } else {
        count++;
      }
    }

    keyWord = keyWord.toUpperCase();
    let uncryptedWord = '';

    for (let i = 0;i < message.length;i++) {
      let indexOfKeyLetter = this.alphabet.indexOf(keyWord[i]);
      let indexOfWordLetter = this.square[indexOfKeyLetter].indexOf(message[i]);
      uncryptedWord += this.alphabet[indexOfWordLetter];
    }

    let result = '';
    let indexOfSymbol = 0;

    for (let i = 0; i < word.length;i++) {
      if (word[i].match(/[A-z]/g) === null || word[i].match(/[\^]/g) !== null) {
        indexOfSymbol++;
        result += word[i];
        continue;
      } else {
        result += uncryptedWord[i - indexOfSymbol];
      }
    }
    if (this.isReverse === false) {
      return result.split("").reverse().join("");
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
