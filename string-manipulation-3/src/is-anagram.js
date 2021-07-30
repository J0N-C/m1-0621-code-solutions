/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var first = firstString.split(' ').join('');
  var second = secondString.split(' ').join('');
  for (let i = 0; i < first.length; i++) {
    var fLCount = 0;
    var sLCount = 0;
    for (let x = 0; x < first.length; x++) {
      if (first[i] === first[x]) {
        fLCount++;
      }
      if (second.indexOf(first[i]) === -1) {
        return false;
      } else if (first[i] === second[x]) {
        sLCount++;
      }
    }
    if (fLCount !== sLCount) {
      return false;
    }
  }
  return true;
}
