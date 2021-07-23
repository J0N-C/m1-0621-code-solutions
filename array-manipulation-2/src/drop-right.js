/* exported dropRight */
function dropRight(array, count) {
  var newArr = [];
  if (count >= array.length) {
    return newArr;
  }
  for (let i = 0; i < (array.length - count); i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
