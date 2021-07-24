/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var swapped = [];
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swapped.push(string[secondIndex]);
    } else if (i === secondIndex) {
      swapped.push(string[firstIndex]);
    } else {
      swapped.push(string[i]);
    }
  }
  return swapped.join('');
}
