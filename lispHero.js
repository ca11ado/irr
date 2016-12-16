function lispHero (inputStr) {
  const symbMapping = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  const open = inputStr[0];
  const close = symbMapping[open];

  if (!close) {
    return false;
  }
  
  const findedIndex = inputStr.lastIndexOf(close);
  if (findedIndex === -1) {
    return false;
  } 

  const firstPart = inputStr.substring(1, findedIndex);
  const secondPart = inputStr.substring(findedIndex + 1);
  const cutedStr = firstPart + secondPart;
  
  if (!cutedStr.length) {
    return true;
  }

  return lispHero(cutedStr);
}

module.exports = lispHero;
