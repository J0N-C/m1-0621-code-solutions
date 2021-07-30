function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var $clicked = document.querySelector('.click-button');
$clicked.addEventListener('click', handleClick);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var $hovered = document.querySelector('.hover-button');
$hovered.addEventListener('mouseover', handleMouseOver);

function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log(event);
  console.log(event.target);
}

var $dblclicked = document.querySelector('.double-click-button');
$dblclicked.addEventListener('dblclick', handleDoubleClick);
