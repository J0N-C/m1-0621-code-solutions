/* exported getKeys */
function getKeys(object) {
  var keysArr = [];
  for (var keys in object) {
    keysArr.push(keys);
  }
  return keysArr;
}
