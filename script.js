const setTheme = (theme) => (document.documentElement.className = theme);

//BUTTONS
const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const reset = document.getElementById("reset");
const del = document.getElementById("del");

//INPUT
const input = document.getElementById("total");

const buttons = [...numbers, ...operator, reset, del];

buttons.forEach(function (i) {
  i.addEventListener("click", function (event) {
    // Access the clicked element
    const target = event.target;

    if (target.classList.contains("operator")) {
      console.log("operator", target.value);
      return;
    }
    if (target.classList.contains("decimal")) {
      console.log("decimal", target.value);
      return;
    }
    if (target.classList.contains("reset")) {
      console.log("reset", target.value);
      return;
    }

    console.log("number", target.value);
  });
});
