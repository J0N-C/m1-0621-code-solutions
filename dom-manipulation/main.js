var clicks = 0;
var $button = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function clickCounter(event) {
  clicks++;
  $clickCount.textContent = 'Clicks: ' + clicks;

  if (clicks < 4) {
    $button.className = 'hot-button cold';
  }

  if (clicks >= 4 && clicks < 7) {
    $button.className = 'hot-button cool';
  }

  if (clicks >= 7 && clicks < 10) {
    $button.className = 'hot-button tepid';
  }

  if (clicks >= 10 && clicks < 13) {
    $button.className = 'hot-button warm';
  }

  if (clicks >= 13 && clicks < 16) {
    $button.className = 'hot-button hot';
  }

  if (clicks >= 16) {
    $button.className = 'hot-button nuclear';
  }

}

$button.addEventListener('click', clickCounter);
