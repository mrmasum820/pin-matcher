function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + ''
    if (pinString.length == 4) {
        return pin
    }
    else {
        return getPin()
    }
}
function generatePin() {
    const pin = getPin()
    document.getElementById('display-pin').value = pin
}
//type button and show input
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText
    const calcInput = document.getElementById('typed-numbers')
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = ''
        }
    }
    else {
        const previousNumber = calcInput.value
        const newNumber = previousNumber + number
        calcInput.value = newNumber
    }
})

//match and submit and show success/failure text
function verifyPin() {
    const pin = document.getElementById('display-pin').value
    const typedNumbers = document.getElementById('typed-numbers').value
    const notifyFail = document.getElementById('notify-fail')
    const notifySuccess = document.getElementById('notify-success')
    if (pin == typedNumbers) {
        notifySuccess.style.display = 'block'
        notifyFail.style.display = 'none'
    }
    else {
        notifyFail.style.display = 'block'
        notifySuccess.style.display = 'none'
    }
}
