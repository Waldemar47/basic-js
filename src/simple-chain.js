const chainMaker = {
  array : [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    this.array.push(value);
    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position - 1 < 0 || position > this.array.length) {
      this.array = [];
      throw Error;
    }
    this.array.splice(position - 1,1);
    return this
  },
  reverseChain() {
    this.array.reverse();
    return this
  },
  finishChain() {
    let string = ""; 
    for(let a = 0; a < this.array.length; a++) {
      if (this.array[a] !== undefined)
        string += `( ${this.array[a]} )~~`; 
      else string += "( )~~"
    }
    this.array = [];
    return string.slice(0,string.length-2);
  }
};


module.exports = chainMaker;
