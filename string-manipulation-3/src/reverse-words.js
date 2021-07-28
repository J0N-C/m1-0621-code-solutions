/* exported reverseWords */
function reverseWords(string) {
  var originalArr = string.split(' ');
  var reverseArr = [];
  for (let i = 0; i < originalArr.length; i++) {
    var revWord = [];
    for (let x = originalArr[i].length - 1; x >= 0; x--) {
      revWord.push(originalArr[i][x]);
    }
    reverseArr.push(revWord.join(''));
  }
  return reverseArr.join(' ');
}
