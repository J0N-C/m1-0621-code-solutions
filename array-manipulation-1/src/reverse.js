/* exported reverse */
function reverse(array) {
  const reverseArr = [];
  for (let i = 0; i < array.length; i++) {
    reverseArr.unshift(array[i]);
  }
  return reverseArr;
}
