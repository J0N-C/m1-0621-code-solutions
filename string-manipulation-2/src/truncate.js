/* exported truncate */
function truncate(length, string) {
  var newStr = string.slice(0, length);
  return newStr + '...';
}
