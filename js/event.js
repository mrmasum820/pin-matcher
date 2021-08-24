function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + ''
    if (pinString.length == 4) {
        return pin
    } else {
        getPin()
    }
}
document.getElementById('get-pin').addEventListener('click', function () {
    const pin = getPin()
    document.getElementById('display-pin').value = pin
})
//get numbers from own click
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText
    const typedNumbers = document.getElementById('typed-numbers')
    if (isNaN(number)) {
        if (number == 'C') {
            typedNumbers.value = ''
        }
    } else {
        const previousNumber = typedNumbers.value
        const newNumber = previousNumber + number
        typedNumbers.value = newNumber
    }
})
//verify pin and submit
document.getElementById('verify-pin').addEventListener('click', function () {
    const pin = document.getElementById('display-pin').value
    const typed = document.getElementById('typed-numbers').value
    const fail = document.getElementById('notify-fail')
    const success = document.getElementById('notify-success')
    if (pin == typed) {
        success.style.display = 'block'
        fail.style.display = 'none'
    }
    else {
        fail.style.display = 'block'
        success.style.display = 'none'
    }
})