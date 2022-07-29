// let firstNum = Number(prompt('What is your first number?:'))
// let secondNum = Number(prompt('What is your second number?:'))
// let operator = prompt('enter your operator')

// other key default error
// input numbers into screen area.
// split numbers from operators and put them into num1 and num2 variables
// delete button using pop

const btns = document.getElementsByClassName('btn')
const screen = document.querySelector('#Screen')
const theme = document.getElementsByTagName('ul')[0].children
const main = document.querySelector('.main')
const body = document.querySelector('body')
const ball = document.querySelector('.switchDiv')
const footer = document.querySelector('.footer')
const year = new Date().getFullYear()

footer.textContent = `Aaron Tan © Copyright ${year} `

let tempNum = ''
let entries = []
let result
let decimalClicked = false

for (let i = 0; i < theme.length; i++) {
  theme[i].addEventListener('click', function (e) {
    let themeBtn = e.target.textContent

    if (themeBtn === '1') {
      console.log('click' + themeBtn)
      main.style.backgroundImage = "url('images/pattern.jpg')"
      body.style.color = 'rgb(50, 50, 50)'
      ball.style.justifyContent = 'flex-start'
    }
    if (themeBtn === '2') {
      console.log('click' + themeBtn)
      main.style.backgroundImage = "url('images/dark.jpg')"
      body.style.color = 'rgb(255, 235, 235)'
      ball.style.justifyContent = 'center'
    }
    if (themeBtn === '3') {
      console.log('click' + themeBtn)
      main.style.backgroundImage = "url('images/light.jpg')"
      body.style.color = 'rgb(50, 50, 50)'
      ball.style.justifyContent = 'flex-end'
    }
  })
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function (e) {
    let cell = e.target.textContent
    let firstNum = Number(entries[0])
    console.log(entries, 'before forloop' + firstNum)
    if (tempNum.length <= 13)
      if (!isNaN(cell)) {
        tempNum += cell

        screen.textContent = tempNum
        // main.style.backgroundImage = 'url("images/light.jpg")'
      }

    if (cell === '.') {
      if (decimalClicked != true) {
        tempNum += cell
        screen.textContent = tempNum
        decimalClicked = true
        // console.log(tempNum)
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
      case '÷':
        entries.push(tempNum)
        entries.push('÷')
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
        tempNum = tempNum.slice(0, -1)
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
        let symbol
        let newNum

        entries.push(tempNum)
        entries.push('=')
        for (let i = 1; i < entries.length; i++) {
          newNum = Number(entries[i + 1])
          symbol = entries[i]

          switch (symbol) {
            case 'x':
              result = firstNum * newNum
              checkResults(result)
              entries.push('x')

              break
            case '+':
              result = firstNum + newNum
              checkResults(result)
              entries.push('+')

              break
            case '-':
              result = firstNum - newNum
              checkResults(result)
              entries.push('-')
              break
            case '÷':
              result = firstNum / newNum
              checkResults(result)
              entries.push('÷')
              break
            case '%':
              result = (firstNum / newNum) * 100
              checkResults(result)
              break
          }

          break
        }

        function checkResults(result) {
          if (result.toString().length <= 13) {
            screen.textContent = result
            entries = ['']
            entries[0] = result.toString()
            console.log(firstNum + 'after check result')
            // console.log(entries, firstNum)
          } else {
            screen.textContent = 'out of range'
          }
        }
    }
    console.log(entries, 'after check results' + firstNum)
  })
}
