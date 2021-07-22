/* exported countdown */
function countdown(number) {
  var countArr = [];
  while (number >= 0) {
    countArr.push(number);
    number--;
  }
  return countArr;
}
