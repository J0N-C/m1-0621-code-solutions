var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', clickedButton);

function clickedButton(e) {
  console.log(e.target);
  console.log(e.target.tagName);
  if (e.target && e.target.nodeName === 'BUTTON') {
    e.target.closest('.task-list-item').remove();
  }
}
