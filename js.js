let num1;
let operator;
let num2;
let display = document.querySelector('#inputBtn')
let buttons = document.querySelectorAll('.op');
let buttonsOp = document.querySelectorAll('.operator');

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

let displayVal;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
       // num1 = button.textContent;
       display.value = button.textContent;
       if (num1 === undefined) {
        num1 = button.textContent;
       } else {
        num2 = button.textContent;
       }
    })
})

buttonsOp.forEach((button) => {
    button.addEventListener('click', () => {
        operator = button.textContent;
        display.value = button.textContent;
    })
})

