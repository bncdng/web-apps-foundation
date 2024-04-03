// Element aus HTML holen
const passwordInput = document.getElementById("password_input");
const togglePasswordBtn = document.getElementById("toggle_password_btn");

// Stage
// Single Point of Truth
let hidePassword = false;

// Stage lesen -> HTML in sync bringen
// render schreibt niemals in den State
function render() {
  if (hidePassword) {
    passwordInput.setAttribute("type", "text");
    togglePasswordBtn.textContent = "Hide Password";
  } else {
    passwordInput.setAttribute("type", "password");
    togglePasswordBtn.textContent = "Show Password";
  }
}

// Event Listener: State updaten -> render
togglePasswordBtn.addEventListener("click", () => {
  console.log("button click");
  hidePassword = !hidePassword;
  // !!!
  render();
});
