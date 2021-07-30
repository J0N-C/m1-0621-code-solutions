/* exported zip */
function zip(first, second) {
  var zipped = [];
  var shorter;
  if (first.length < second.length) {
    shorter = first.length;
  } else {
    shorter = second.length;
  }
  for (let i = 0; i < shorter; i++) {
    var subArr = [];
    subArr.push(first[i]);
    subArr.push(second[i]);
    zipped.push(subArr);
  }
  return zipped;
}
