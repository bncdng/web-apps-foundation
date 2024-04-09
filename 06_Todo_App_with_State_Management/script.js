// Get elements from HTML
const todoList = document.getElementById("todoList");

// State
let state = {
  todos: [
    { description: "Learn HTML", id: Date.now(), done: true },
    { description: "Learn CSS", id: Date.now(), done: false },
  ],
  filter: "",
};

// Render Function
function render() {
  // Tisch abräumen
  todoList.innerHTML = "";

  // Create HTML list item
  state.todos.forEach((todo) => {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = "done";
    input.checked = todo.done;

    const span = document.createElement("span");
    span.textContent = todo.description;

    const label = document.createElement("label");
    label.append(input, span);

    const form = document.createElement("form");
    form.append(label);

    const li = document.createElement("li");
    li.append(form);

    todoList.append(li);
  });
}

render();

// Add new Todo Function
const newTodo = document.getElementById("newTodo");
let count = 0;

function addNewTodo() {
  state.todos.push({
    description: newTodo.value,
    id: Date.now(),
  });
  return addNewTodo;
}

// Event Listener
const addTodo = document.getElementById("addTodo");
addTodo.addEventListener("click", addNewTodo);

console.log(state);
