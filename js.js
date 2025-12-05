let num1 = 0;
let operator = "";
let num2 = 0;
const display = document.querySelector('#inputBtn')
const buttons = document.querySelectorAll('.op');
const buttonsOp = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');

function add (a, b) {
return a + b
}

function subtract (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
        return a / b
}

function operate (operator,num1, num2) {
 switch (operator) {
    case '+':
        return add(num1, num2);
        break;
    default:
 }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
       display.value += button.textContent;
       if (operator.length === 0) {
        num1 += button.textContent;
       } else {
        num2 += button.textContent;
       }
    })
})

buttonsOp.forEach((button) => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
        operator += button.textContent;
    })
})

equal.addEventListener('click', (operate));
console.log(operate(num1, operator, num2));