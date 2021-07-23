/* exported take */
function take(array, count) {
  var newArr = [];
  if (count > array.length) {
    count = array.length;
  }
  for (let i = 0; i < count; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
