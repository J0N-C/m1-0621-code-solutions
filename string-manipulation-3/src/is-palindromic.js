/* exported isPalindromic */
function isPalindromic(string) {
  var newStr = string.split(' ').join('');
  var strLength = newStr.length - 1;
  for (let i = 0; i <= strLength; i++) {
    if (newStr[i] !== newStr[(strLength - i)]) {
      return false;
    }
  }
  return true;
}
