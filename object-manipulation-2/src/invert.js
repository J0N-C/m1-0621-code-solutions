/* exported invert */
function invert(source) {
  var newObj = {};
  for (var props in source) {
    newObj[source[props]] = props;
  }
  return newObj;
}
