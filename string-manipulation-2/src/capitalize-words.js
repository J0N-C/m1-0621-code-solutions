/* exported capitalizeWords */
function capitalizeWords(string) {
  var lower = string.toLowerCase();
  var strArr = lower.split(' ');
  var newArr = [];
  for (let i = 0; i < strArr.length; i++) {
    newArr.push(strArr[i][0].toUpperCase() + strArr[i].slice(1, lower.length));
  }
  return newArr.join(' ');
}
