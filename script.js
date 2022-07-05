const setTheme = (theme) => (document.documentElement.className = theme);

//BUTTONS
const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const reset = document.getElementById("reset");
const del = document.getElementById("del");
const decimal = document.querySelector(".decimal");
const buttons = [...numbers, ...operator, reset, del, decimal];

//Calculator values
const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function inputDigit(digit) {
  const displayValue = calculator.displayValue;

  let number = "";
  if (displayValue === "0") {
    number = digit;
  } else {
    number = displayValue + digit;
  }

  calculator.displayValue = number;
}

function inputDecimal(dot) {
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

//Calculator Display
function updateDisplay() {
  const display = document.getElementById("total");
  display.value = calculator.displayValue;
}
updateDisplay();

buttons.forEach(function (button) {
  button.addEventListener("click", (event) => {
    const { target } = event;
    if (!target.matches("button")) {
      return;
    }

    if (target.classList.contains("operator")) {
      console.log(target.value);
      return;
    }

    if (target.classList.contains("decimal")) {
      inputDecimal(target.value);
      updateDisplay();
      return;
    }

    if (target.classList.contains("all-clear")) {
      console.log("clear", target.value);
      return;
    }

    inputDigit(target.value);
    updateDisplay();
  });
});
