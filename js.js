let num1;
let operator;
let num2;

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
        break;
 }
}

