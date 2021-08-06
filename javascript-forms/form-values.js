var $formSubmit = document.querySelector('#contact-form');

$formSubmit.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();
  var filledForm = {};
  filledForm.name = $formSubmit.name.value;
  filledForm.email = $formSubmit.email.value;
  filledForm.message = $formSubmit.message.value;
  console.log(filledForm);
  $formSubmit.reset();
}
