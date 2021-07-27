/* exported flatten */
function flatten(array) {
  var flatArr = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'object') {
      for (let x = 0; x < array[i].length; x++) {
        flatArr.push(array[i][x]);
      }
    } else {
      flatArr.push(array[i]);
    }
  }
  return flatArr;
}
