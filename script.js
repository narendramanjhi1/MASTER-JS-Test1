// Get DOM elements
const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');
const countSpan = document.getElementById('count');

// Add event listener to the "Add" button
addButton.addEventListener('click', addTodo);

// Add event listener to the todo input field for Enter key press
todoInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});

// Function to add a new todo item
function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText !== '') {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <input type="checkbox">
      <span>${todoText}</span>
      <button class="deleteButton">Delete</button>
    `;
    todoList.appendChild(listItem);

    // Reset the input field
    todoInput.value = '';

    // Update the total task count
    updateTaskCount();

    // Add event listener to the new delete button
    const deleteButton = listItem.querySelector('.deleteButton');
    deleteButton.addEventListener('click', deleteTodo);

    // Add event listener to the checkbox
    const checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', toggleCompleted);
  }
}

// Function to delete a todo item
function deleteTodo(event) {
  const listItem = event.target.parentElement;
  todoList.removeChild(listItem);
  updateTaskCount();
}

// Function to toggle a todo item's completed status
function toggleCompleted(event) {
  const listItem = event.target.parentElement;
  listItem.classList.toggle('completed');
}

// Function to update the total task count
function updateTaskCount() {
  const totalCount = todoList.children.length;
  countSpan.textContent = totalCount;
}
