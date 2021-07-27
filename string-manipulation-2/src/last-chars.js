/* exported lastChars */
function lastChars(length, string) {
  if (length > string.length) length = string.length;
  var newStr = string.slice(string.length - length, string.length);
  return newStr;
}
