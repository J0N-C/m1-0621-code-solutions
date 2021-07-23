/* exported isVowel */
function isVowel(char) {
  var x = char.toLowerCase();
  if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
    return true;
  } else {
    return false;
  }
}
