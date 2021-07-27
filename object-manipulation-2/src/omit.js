/* exported omit */
function omit(source, keys) {
  var newObj = {};
  Object.assign(newObj, source);
  for (let i = 0; i < keys.length; i++) {
    delete newObj[keys[i]];
  }
  return newObj;
}
