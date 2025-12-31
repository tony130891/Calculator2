let num1 = 0;
let operator = "";
let num2 = "";
const display = document.querySelector('#inputBtn')
const buttons = document.querySelectorAll('.op');
const buttonsOp = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
let result;


function add (num1, num2) {
  return num1 + num2;  
} 

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
if(num2 === 0) return undefined;
    return num1 / num2;
}

function operate (num1, operator, num2) {
 if (operator === '+') {
    result = add(num1, num2);
 } else if (operator === '-') {
    result = subtract(num1, num2);
 } else if (operator === '*') {
    result = multiply(num1, num2);
 } else if (operator === '/') {
    result = divide(num1, num2);
 } else {
    result = 'invalid operator';
 }
 return result
}


buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (operator.length === 0) {
        display.value += button.textContent;
        num1 += button.textContent;
        num1 = Number(num1);
       } else {
        display.value += button.textContent;
        num2 += button.textContent;
        num2 = Number(num2);
       }
    })
    return num1, num2
})

buttonsOp.forEach((button) => {
    button.addEventListener('click', () => {
            display.value += button.textContent;
            operator += button.textContent;
    })
    return operator
})

equal.addEventListener('click', () => {
   operate(num1, operator, num2);
   display.value = result;

   num1 = result;
   operator = "";
   // num2
   num2 = "";
});
