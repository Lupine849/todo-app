'use strict';

const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const task = todoInput.value;

  if (!task) return;

  const li = document.createElement('li');

  li.textContent = task;

  const deleteBtn = document.createElement('button');

  deleteBtn.textContent = '削除';

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(deleteBtn);

  todoList.appendChild(li);
});