let firstNum = Number(prompt('What is your first number?:'))
let secondNum = Number(prompt('What is your second number?:'))
let operator = prompt('enter your operator')

function multiply(num1, num2) {
  return num1 * num2
}

function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 * num2
}

function calcNum(num1, calc, num2) {
  switch (calc) {
    case '*':
      calc = multiply(num1, num2)
      break
    case '+':
      calc = add(num1, num2)
      break
    case '-':
      calc = subtract(num1, num2)
      break
    case '/':
      calc = divide(num1, num2)
      break
  }

  return calc
}
console.log(calcNum(firstNum, operator, secondNum))
