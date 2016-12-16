require('./groupBy');

function quaddouble1 (num1, num2) {
  const arr1 = String.prototype.split.call(num1, '');
  const groupedArr1 = arr1.groupBy();

  let fourNumbersArr = [];
  for (let key in groupedArr1) {
    if (groupedArr1[key].length >= 4) {
      fourNumbersArr.push(groupedArr1[key]);
    }
  }

  for (let i = 0; i < fourNumbersArr.length; i++) {
    const double = `${fourNumbersArr[i][0]}${fourNumbersArr[i][0]}`;
    if (String(num2).indexOf(double) >= 0) return true;
  }

  return false;
}

function quaddouble2 (num1, num2) {
  const re = /(\d)\1{3}/g;
  let fourNumbersArr = [];
  let number;
  while ((number = re.exec(String(num1))) !== null) {
    fourNumbersArr.push(number[0]); 
  }
  
  for (let i = 0; i < fourNumbersArr.length; i++) {
    const double = `${fourNumbersArr[i][0]}${fourNumbersArr[i][0]}`;
    const re = new RegExp(`${double}`);
    if (re.test(String(num2))) return true;
  }
  
  return false;
}

module.exports = {
  quaddouble1,
  quaddouble2
};
