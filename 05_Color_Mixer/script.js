const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const colorHex = document.getElementById("colorHex");

// Number to hexString
function toHexString(num) {
  const hexString = num.toString(16);
  if (hexString.length == 1) {
    return "0" + hexString;
  }
  return hexString;
}

// Render Function
function render() {
  const r = Number(red.value);
  const g = Number(green.value);
  const b = Number(blue.value);

  // 1. Hintergrund einfärben
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  // 2. Hex Wert darstellen

  colorHex.textContent = `#${toHexString(r)}${toHexString(g)}${toHexString(b)}`;
}

render();

// Event Listener
red.addEventListener("input", () => {
  render();
});

green.addEventListener("input", () => {
  render();
});

blue.addEventListener("input", () => {
  render();
});

// Random Color Button
const randomColor_btn = document.getElementById("randomColor_btn");

randomColor_btn.addEventListener("click", () => {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => response.json())
    .then((data) => {
      document.body.style.backgroundColor = data.color;
    });
});
