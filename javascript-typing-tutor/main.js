var $textNodes = document.querySelectorAll('span');
var $resetButton = document.getElementById('reset');
var textIndex = 0;
var incorectKeys = 0;
var keyAccuracy;
$textNodes[0].className = 'under';
document.addEventListener('keydown', keyCheck);
$resetButton.addEventListener('click', resetAll);

function keyCheck(event) {
  if (event.key === $textNodes[textIndex].textContent) {
    $textNodes[textIndex].className = 'correct';
    if (textIndex < $textNodes.length - 1) {
      $textNodes[textIndex + 1].className = 'under';
      textIndex++;
    }
  } else {
    $textNodes[textIndex].className = 'under incorrect';
    incorectKeys++;
  }
  if (textIndex === $textNodes.length - 1) {
    keyAccuracy = Math.round($textNodes.length * 100 / ($textNodes.length + incorectKeys)) + '%';
    resetPopup(keyAccuracy);
  }
}

function resetPopup(num) {
  document.getElementById('score-pop').className = 'reset-popup';
  document.getElementById('score-msg').textContent = 'Congratulations! Your Typing Accuracy: ' + num;
}

function resetAll(event) {
  textIndex = 0;
  incorectKeys = 0;
  for (let i = 0; i < $textNodes.length; i++) {
    $textNodes[i].className = '';
  }
  $textNodes[0].className = 'under';
  document.getElementById('score-pop').className = 'hidden';
}
