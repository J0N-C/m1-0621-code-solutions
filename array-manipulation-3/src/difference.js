/* exported difference */
function difference(first, second) {
  var diff = [];
  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      diff.push(first[i]);
    }
  }
  for (let x = 0; x < second.length; x++) {
    if (first.indexOf(second[x]) === -1) {
      diff.push(second[x]);
    }
  }
  return diff;
}
