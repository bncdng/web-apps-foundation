const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const colorDisplay = document.getElementById("colorDisplay");

function render() {
  const r = Number(redStringValue);
  const g = Number(greenStringValue);
  const b = Number(blueStringValue);

  // 1. Hintergrund einfärben
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  // 2. Hex Wert darstellen
  let redHex = r.toString(16);
  let greenHex = g.toString(16);
  let blueHex = b.toString(16);

  if (redHex.length == 1) {
    redHex = "0" + redHex;
  }

  if (greenHex.length == 1) {
    greenHex = "0" + greenHex;
  }

  if (blueHex.length == 1) {
    blueHex = "0" + blueHex;
  }

  colorHex.textContent = `#${redHex}${greenHex}${blueHex}`;
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
