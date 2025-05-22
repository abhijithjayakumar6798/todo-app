let taskList = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  const ul = document.getElementById('taskList');
  ul.innerHTML = '';
  taskList.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.text;
    if (task.completed) li.classList.add('completed');
    li.onclick = () => toggleTask(index);

    const delBtn = document.createElement('button');
    delBtn.textContent = '❌';
    delBtn.onclick = (e) => {
      e.stopPropagation();
      deleteTask(index);
    };

    li.appendChild(delBtn);
    ul.appendChild(li);
  });
  localStorage.setItem('tasks', JSON.stringify(taskList));
}

function addTask() {
  const input = document.getElementById('taskInput');
  if (input.value.trim() !== '') {
    taskList.push({ text: input.value, completed: false });
    input.value = '';
    renderTasks();
  }
}

function toggleTask(index) {
  taskList[index].completed = !taskList[index].completed;
  renderTasks();
}

function deleteTask(index) {
  taskList.splice(index, 1);
  renderTasks();
}

renderTasks();
