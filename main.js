'use strict';

const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

let tasks = [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {

  const savedTasks = localStorage.getItem('tasks');

  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    renderTasks();
  }

}

function renderTasks() {

  todoList.innerHTML = '';

  tasks.forEach((task, index) => {

    const li = document.createElement('li');

    const taskLeft = document.createElement('div');
    taskLeft.classList.add('task-left');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = task;

    checkbox.addEventListener('change', () => {
      span.classList.toggle('completed', checkbox.checked);
    });

    taskLeft.appendChild(checkbox);
    taskLeft.appendChild(span);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', () => {
      
      tasks.splice(index, 1);

      saveTasks();

      renderTasks();
    });

    li.appendChild(taskLeft);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);

  });

}

loadTasks();

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const task = todoInput.value.trim();

  if (!task) return;

  tasks.push(task);

  saveTasks();

  renderTasks();

  todoInput.value = '';
});