function handleFocus(event) {
  console.log('focus: ', event);
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur: ', event);
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

var $userName = document.querySelector('#user-name');
var $userEmail = document.querySelector('#user-email');
var $userMsg = document.querySelector('#user-message');

$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);

$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);

$userMsg.addEventListener('focus', handleFocus);
$userMsg.addEventListener('blur', handleBlur);
$userMsg.addEventListener('input', handleInput);
