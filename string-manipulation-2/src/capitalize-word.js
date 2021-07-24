/* exported capitalizeWord */
function capitalizeWord(word) {
  var lower = word.toLowerCase();
  if (lower === 'javascript') {
    return 'JavaScript';
  }
  return lower[0].toUpperCase() + lower.slice(1, lower.length);
}
