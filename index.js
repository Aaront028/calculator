// other key default error

const btns = document.getElementsByClassName('btn')
let screen = document.querySelector('#Screen')
let tempNum = ''
let entries = []

let result
let symbol
let newNum
let decimalClicked = false

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function (e) {
    let cell = e.target.textContent
    let firstNum = Number(entries[0])
    let percentage = firstNum / 100
    if (!isNaN(cell)) {
      tempNum += cell

      screen.textContent = tempNum
      console.log(tempNum, entries)
    }

    if (cell === '.') {
      if (decimalClicked != true) {
        tempNum += cell
        screen.textContent = tempNum
        decimalClicked = true
        console.log(tempNum)
      }
    }

    switch (cell) {
      case 'x':
        entries.push(tempNum)
        entries.push('x')
        decimalClicked = false
        tempNum = ''
        break
      case '+':
        entries.push(tempNum)
        entries.push('+')
        decimalClicked = false
        tempNum = ''
        break
      case '-':
        entries.push(tempNum)
        entries.push('-')
        decimalClicked = false
        tempNum = ''
        break
      case '/':
        entries.push(tempNum)
        entries.push('/')
        decimalClicked = false
        tempNum = ''
        break
      case '%':
        entries.push(tempNum)
        entries.push('%')
        decimalClicked = false
        tempNum = ''
        break
      case 'del':
        screen.textContent = tempNum = tempNum.slice(0, -1)
        if (tempNum === '') {
          tempNum = '0'
          screen.textContent = tempNum
        }
        screen.textContent = tempNum
        break

      case 'RESET':
        entries = []
        tempNum = ''
        screen.textContent = '0'
        decimalClicked = false
        break
      case '=':
        entries.push(tempNum)
        for (let i = 1; i < entries.length; i++) {
          newNum = Number(entries[i + 1])
          symbol = entries[i]
          if (entries[i + 2] === '%') {
            firstNum = percentage
          }
          console.log(symbol)
          switch (symbol) {
            case 'x':
              result = firstNum * newNum
              screen.textContent = result
              break
            case '+':
              result = firstNum + newNum
              screen.textContent = result
              break
            case '-':
              result = firstNum - newNum
              screen.textContent = result
              break
            case '÷':
              result = firstNum / newNum
              screen.textContent = result
              break
          }
          break
        }
      case '%':
        result = percentage
        screen.textContent = result
        console.log('clicked percentage')
        break
    }
  })
}
