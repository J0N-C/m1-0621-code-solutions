/* exported takeRight */
function takeRight(array, count) {
  var newArr = array.slice((array.length - count), array.length);
  return newArr;
}
