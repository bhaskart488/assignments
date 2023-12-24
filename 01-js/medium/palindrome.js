/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function removePunctuationAndSpaces(inputString) {
  // Remove punctuation using a regular expression
  let stringWithoutPunctuation = inputString.replace(/[^\w\s]/g, '');

  // Remove spaces using a regular expression
  let stringWithoutSpaces = stringWithoutPunctuation.replace(/\s/g, '');

  return stringWithoutSpaces;
}

function isPalindrome(str) {

  let str1 = removePunctuationAndSpaces(str);
  strCheck = str1.toLowerCase();
  strRev = strCheck.split('').reverse().join('');
  if (strCheck === strRev){
    return true;
  }
  else {
    return false;
  }
}

module.exports = isPalindrome;
