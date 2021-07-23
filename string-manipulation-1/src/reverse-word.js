/* exported reverseWord */
function reverseWord(word) {
  var reversed = [];
  for (let i = 0; i < word.length; i++) {
    reversed.unshift(word[i]);
  }
  return reversed.join('');
}
