var $modalButton = document.querySelector('#modal-button');
var $popUp = document.querySelector('#pop');
var $popUpQ = document.querySelector('#survey-popup');
var $closePopup = document.querySelector('#close-popup');
var annoying = 0;

$modalButton.addEventListener('click', surveyPop);
$closePopup.addEventListener('click', surveyPop);

function surveyPop(event) {
  if (annoying === 0) {
    $popUp.className = 'modal-cover';
    $popUpQ.textContent = 'Would you like to take a survey?';
    $closePopup.textContent = 'NO';
    annoying = 1;
  } else {
    $popUp.className = 'hidden';
    annoying = 0;
  }
}
