/* exported titleCase */
function titleCase(title) {
  var wordsArr = title.toLowerCase().split(' ');
  var newArr = [];
  for (let i = 0; i < wordsArr.length; i++) {
    var tempWord = wordsArr[i];
    var prevWord = wordsArr[i - 1];
    if (tempWord === 'javascript') {
      newArr.push('JavaScript');
      continue;
    }
    if (tempWord === 'javascript:') {
      newArr.push('JavaScript:');
      continue;
    }
    if (tempWord === 'api') {
      newArr.push('API');
      continue;
    }
    if (tempWord.indexOf('-') !== -1) {
      tempWord = tempWord.slice(0, tempWord.indexOf('-') + 1) + tempWord[tempWord.indexOf('-') + 1].toUpperCase() + tempWord.slice([tempWord.indexOf('-') + 2]);
    }
    if (i === 0 || prevWord[prevWord.length - 1] === ':') {
      newArr.push(tempWord[0].toUpperCase() + tempWord.slice(1, tempWord.length));
      continue;
    }
    if (tempWord.length > 2 && !(tempWord === 'the' || tempWord === 'for' || tempWord === 'per')) {
      newArr.push(tempWord[0].toUpperCase() + tempWord.slice(1, tempWord.length));
    } else {
      newArr.push(tempWord);
    }
  }
  return newArr.join(' ');
}
