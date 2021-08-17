/* exported todos */

var todos = [];

var previousTodosJSON = localStorage.getItem('javascript-local-Storage');
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}

window.addEventListener('beforeunload', function (event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-Storage', todosJSON);
});
