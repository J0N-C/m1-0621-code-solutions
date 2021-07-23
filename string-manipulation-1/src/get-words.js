/* exported getWords */
function getWords(string) {
  var words = string.split(' ');
  if (words[0] === '') {
    words = [];
  }
  return words;
}
