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
  // Clear Todo List
  todoList.innerHTML = "";

  // Create HTML list item
  state.todos.forEach((todo) => {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = "done";
    input.id = "check";
    input.checked = todo.done;

    const span = document.createElement("span");
    span.textContent = todo.description;

    const label = document.createElement("label");
    label.append(input, span);
    label.for = "check";

    const form = document.createElement("form");
    form.append(label);

    const li = document.createElement("li");
    li.append(form);

    todoList.append(li);
  });
}

render();

// Add new Todo Function
function addNewTodo(event) {
  event.preventDefault(); // Keep page from refreshing

  const newTodo = document.getElementById("newTodo");

  const inputValue = newTodo.value.trim(); // Trim whitespace

  let idCounter = Date.now(); // Initialze id counter

  if (inputValue !== "") {
    state.todos.push({
      description: inputValue,
      id: idCounter++,
      done: false,
    });

    render();
    // Clear input field after adding new todo
    newTodo.value = "";
  }
}

// Event Listener
const addTodo = document.getElementById("addTodo");
addTodo.addEventListener("click", addNewTodo);

console.log(state);
