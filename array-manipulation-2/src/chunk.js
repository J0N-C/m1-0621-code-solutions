/* exported chunk */
function chunk(array, size) {
  var newArr = [];
  var x = 0;
  for (let i = 0; i < array.length; i += size) {
    var subArr = [];
    for (x; x < i + size; x++) {
      if (x > array.length - 1) {
        break;
      }
      subArr.push(array[x]);
    }
    newArr.push(subArr);
  }
  return newArr;
}
