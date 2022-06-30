const setTheme = (theme) => (document.documentElement.className = theme);

//BUTTONS
const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const reset = document.getElementById("reset");
const del = document.getElementById("del");
const decimal = document.querySelector(".decimal");

const buttons = [...numbers, ...operator, reset, del, decimal];

const input = document.getElementById("total");

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("operator")) {
      input.value = target.value;
      console.log("operator", target.value);
      return;
    }

    if (target.classList.contains("decimal")) {
      input.value = target.value;
      console.log("decimal", target.value);
      return;
    }

    if (target.classList.contains("all-clear")) {
      input.value = target.value;
      console.log("clear", target.value);
      return;
    }

    console.log("digit", target.value);

    if (target.matches("button")) {
      const keyContent = target.value;
      const displayedNum = input.value;
      if (target.value) {
        if (displayedNum === "0") {
          input.value = keyContent;
        } else {
          input.value = displayedNum + keyContent;
        }
      }
    }
  });
});

reset.addEventListener("click", function () {
  input.value = 0;
});
