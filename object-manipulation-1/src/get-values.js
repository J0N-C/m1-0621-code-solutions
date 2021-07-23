/* exported getValues */
function getValues(object) {
  var valuesArr = [];
  for (var keys in object) {
    valuesArr.push(object[keys]);
  }
  return valuesArr;
}
