/* exported intersection */
function intersection(first, second) {
  var newArr = [];
  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      newArr.push(first[i]);
    }
  }
  return newArr;
}
