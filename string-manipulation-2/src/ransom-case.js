/* exported ransomCase */
function ransomCase(string) {
  var letters = string.toLowerCase();
  const ransom = [];
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransom.push(letters[i]);
    } else {
      ransom.push(letters[i].toUpperCase());
    }
  }
  return ransom.join('');
}
