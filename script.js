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
  const { displayValue } = calculator;
  calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
}

function inputDecimal(dot) {
  // If the `displayValue` does not contain a decimal point
  if (!calculator.displayValue.includes(dot)) {
    // Append the decimal point
    calculator.displayValue += dot;
  }
}

function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if (firstOperand === null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
  console.log(calculator);
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
      handleOperator(target.value);
      updateDisplay();
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
