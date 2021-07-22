/* exported oddOrEven */
function oddOrEven(numbers) {
  var oddity = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddity.push('even');
    } else {
      oddity.push('odd');
    }
  }
  return oddity;
}
