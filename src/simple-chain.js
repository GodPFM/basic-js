const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  massiveWithData: [],
  stringToReturn: '',

  getLength() {
    return this.massiveWithData.length;
  },
  addLink(value) {
    this.massiveWithData.push(String(value));
    return this;
  },
  removeLink(position) {
    if (this.massiveWithData[position - 1] == undefined) {
      this.massiveWithData = [];
      this.stringToReturn = '';
      throw new Error('You can\'t remove incorrect link!');
    }
    this.massiveWithData.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.massiveWithData.reverse();
    return this;
  },
  finishChain() {
    for (let i = 0; i < this.massiveWithData.length;i++) {
      this.stringToReturn += '( ' + this.massiveWithData[i] + ' )';
      if (this.massiveWithData.length != 1 && i != this.massiveWithData.length - 1) {
        this.stringToReturn += '~~'
      }
    }
    let ret = this.stringToReturn;
    this.massiveWithData = [];
    this.stringToReturn = '';
    return ret;
  }
};

module.exports = {
  chainMaker
};
