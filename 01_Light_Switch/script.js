// Element aus dem HTML in JS Variablen speichern
const toggleButton = document.getElementById("toggle-btn");

let isDark = false;

// HTML updaten(in sync mit dem State bringen)
function render() {
  if (isDark) {
    document.body.classList.add("dark");
    document.title = "Good Night";
  } else {
    document.body.classList.remove("dark");
    document.title = "Good Morning";
  }
}

// Event Listener
toggleButton.addEventListener("click", () => {
  // Stage update
  // Toggle ein boolean
  isDark = !isDark;

  render();
});
