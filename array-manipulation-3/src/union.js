/* exported union */
function union(first, second) {
  var newArr = first.slice(0);
  for (let i = 0; i < second.length; i++) {
    if (newArr.indexOf(second[i]) === -1) {
      newArr.push(second[i]);
    }
  }
  return newArr;
}
