let display = document.getElementById('display');
let currentelement = '';
let operator = '';
let result = '';

function appendNumber(number){
    currentelement += number;
    display.value = currentelement;
}

function setOperator(op){
    operator += op;
    result = parseFloat(currentelement);
    currentelement = '';
}
function calculate(){
    let number = parseFloat(currentelement);

    if (operator === '+') {
        result += number;
      } else if (operator === '-') {
        result -= number;
      } else if (operator === '*') {
        result *= number;
      } else if (operator === '/') {
        result /= number;
      }

      currentelement = '';
      display.value = result;
      operator = '';
}

function clearDisplay() {
    currentNumber = '';
    result = 0; // Reset the result to 0
    display.value = '';
  }
  