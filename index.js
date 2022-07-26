// let firstNum = Number(prompt('What is your first number?:'))
// let secondNum = Number(prompt('What is your second number?:'))
// let operator = prompt('enter your operator')

// other key default error
// input numbers into screen area.
// split numbers from operators and put them into num1 and num2 variables
// delete button using pop

const btns = document.getElementsByClassName('btn')
let screen = document.querySelector('#Screen')
let tempNum = ''
let total = 0
let entries = []

let result

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function (e) {
    let cell = e.target.textContent
    if (!isNaN(cell)) {
      tempNum += cell
      screen.textContent = tempNum
      console.log(tempNum, entries)
    }
    switch (cell) {
      case 'x':
        entries.push(tempNum)
        entries.push('x')
        tempNum = ''
        console.log(entries)

        console.log(cell)
        break
      case '+':
        entries.push(tempNum)
        entries.push('+')
        tempNum = ''
        console.log(entries)
        break
      case '-':
        console.log(entries)

        console.log(cell)

        entries.push(tempNum)
        entries.push('-')
        tempNum = ''
        console.log(entries)
        break
      case '/':
        entries.push(tempNum)
        entries.push('-')
        tempNum = ''
        console.log(entries)
        break
      case 'del':
        screen.textContent = tempNum = tempNum.slice(0, -1)
        if (tempNum === '') {
          tempNum = '0'
          screen.textContent = tempNum
        }
        console.log(entries)

        console.log(cell)

        screen.textContent = tempNum
        break

      case '=':
        let symbol
        let newNum
        let firstNum = Number(entries[0])
        entries.push(tempNum)
        for (let i = 1; i < entries.length; i++) {
          newNum = Number(entries[i + 1])
          symbol = entries[i]
          console.log(
            // 'newNum: ' + newNum + 'each array:' + entries[i]
            'firstnum: ' + firstNum + 'newNum: ' + newNum + 'symbol: ' + symbol
          )
          switch (symbol) {
            case 'x':
              result = firstNum *= newNum
              screen.textContent = result
              return result
              break
            case '+':
              result = firstNum += newNum
              screen.textContent = result
              return result
            // break
            case '-':
              result = firstNum -= newNum
              screen.textContent = result
              return result
              break
            case '÷':
              result = firstNum /= newNum
              screen.textContent = result
              return result
              break
              screen.textContent = result
          }
        }
    }
  })
}
