// Element aus dem HTML in JS Variablen speichern
const counter = document.getElementById("counter");
const resetButton = document.getElementById("reset-btn");

// State
let count = 0;

// HTML updaten(in sync mit dem State bringen)
function render() {
  counter.textContent = count;

  counter.style =
    "background-image: linear-gradient(90deg, gold " + count + "%, white 0%)";
}

// Initial Render
render();

// Event Listener
// Add Event Listener: State updaten -> render();
counter.addEventListener("click", () => {
  console.log("counter click");
  count += 1;

  render();
});

resetButton.addEventListener("click", () => {
  count = 0;
  console.log("reset button click");
  render();
});

document.addEventListener("keydown", (event) => {
  console.log("keydown", event.code);

  if (event.code == "Space" || event.code == "Enter") {
    count += 1;

    render();
  }
});
