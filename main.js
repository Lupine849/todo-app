'use strict';

const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const task = todoInput.value.trim();

  if (!task) return;

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
    li.remove();
  });

  li.appendChild(taskLeft);
  li.appendChild(deleteBtn);

  todoList.appendChild(li);

  todoInput.value = '';
});