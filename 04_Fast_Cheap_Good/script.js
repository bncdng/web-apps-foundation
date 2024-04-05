// Aus HTML holen
const fast = document.getElementById("fast");
const cheap = document.getElementById("cheap");
const good = document.getElementById("good");

let lastCheckedCheckbox = null; // fastCheckbox | cheapCheckbox | goodCheckboxl

[fast, cheap, good].forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (cheap.checked && good.checked && fast.checked) {
      lastCheckedCheckbox.checked = false;
    }

    if (checkbox.checked) {
      lastCheckedCheckbox = checkbox;
    }
  });
});
