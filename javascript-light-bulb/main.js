var $bulb = document.querySelector('.bulb');
var $room = document.querySelector('.container');
var switchState = 'on';

$bulb.addEventListener('click', switchOff);

function switchOff(event) {
  if (switchState === 'on') {
    switchState = 'off';
  } else {
    switchState = 'on';
  }
  $bulb.className = 'bulb ' + switchState;
  $room.className = 'container ' + switchState;
}
