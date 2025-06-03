document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('new-task-input');
  const addButton = document.getElementById('add-task-button');
  const taskList = document.getElementById('task-list');

  function createTaskItem(text) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;
    span.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-button';
    deleteBtn.textContent = '✕';
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
  }

  function addTask() {
    const text = input.value.trim();
    if (text === '') return;
    const taskItem = createTaskItem(text);
    taskList.appendChild(taskItem);
    input.value = '';
    input.focus();
  }

  addButton.addEventListener('click', addTask);
  input.addEventListener('keyup', event => {
    if (event.key === 'Enter') addTask();
  });
});