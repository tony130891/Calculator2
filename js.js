let num1 = 0;
let operator = "";
let num2 = 0;
const display = document.querySelector('#inputBtn')
const buttons = document.querySelectorAll('.op');
const buttonsOp = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');


function operate (operator,num1, num2) {
    let result = 0;
 switch (operator) {
    case '+':
     result = (num1 + num2);
    break;
    case '-':
     result = (num1 - num2);
     break;
    default:
    case '*':
     result = (num1 * num2);
     break;
     case '/':
     result = (num1 / num2);
     break;
 }
 return result
}


buttons.forEach((button) => {
    button.addEventListener('click', () => {
       display.value += button.textContent;
       if (operator.length === 0) {
        num1 += button.textContent;
        num1 = Number(num1);
       } else {
        num2 += button.textContent;
        num2 = Number(num2);
       }
    })
})

buttonsOp.forEach((button) => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
        operator += button.textContent;
    })
})

equal.addEventListener('click', () => {
    display.value = operate(operator, num1, num2);
})
