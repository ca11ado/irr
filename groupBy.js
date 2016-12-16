Array.prototype.groupBy = function (callback = (v) => v) {
  let tmpObj = {};

  for (let i = 0; i < this.length; i++ ) {
    let key = callback(this[i]);
    if (tmpObj[key]) {
      tmpObj[key].push(this[i]);
    } else {
      tmpObj[key] = [this[i]];
    }
  }

  let tmpObj2 = {};
  let counter = 0;
  for (let key in tmpObj) {
    tmpObj2[counter] = tmpObj[key];
    counter++;
  }

  return tmpObj2;
};

