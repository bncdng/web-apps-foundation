// Get elements from HTML
const todoList = document.getElementById("todoList");
const addTodoForm = document.getElementById("addTodoForm");

// State
let state = {
  todos: [
    { description: "Learn HTML", id: Date.now(), done: true },
    { description: "Learn CSS", id: Date.now(), done: false },
  ],
  filter: "",
};

// Load from Local Storage
function loadFromLocalStorage() {
  const loadedState = localStorage.getItem("todoStateV1");
  if (loadedState == null) {
    return;
  }
  state = JSON.parse(loadedState);
}

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

    input.addEventListener("change", () => {
      // State update when checkbox is changed
      todo.done = input.checked;
      localStorage.setItem("todoStateV1", JSON.stringify(state));

      render();
    });

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

// Event Listener for form submission
addTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Validate and trim input value
  const inputValue = newTodo.value.trim();

  // Can't be empty
  if (inputValue == "") {
    alert("Please insert Description");
    return;
  }

  // Remove Duplicate
  if (
    state.todos.some((todo) => {
      return todo.description.toLowerCase() == inputValue.toLowerCase();
    })
  ) {
    alert("Todo already exists");
    return;
  }

  // Update State with new Todo
  const id = Date.now();

  state.todos.push({
    description: inputValue,
    id: id,
    done: false,
  });

  // Reset Form
  addTodoForm.reset();

  localStorage.setItem("todoStateV1", JSON.stringify(state));

  // Render
  render();
});

// Load State from Local Storage
loadFromLocalStorage();

// Initial Render
render();
