var operations = document.getElementById("operations")
var result = document.getElementById("result")

function clickHandler(key) {
    if (key === "=") {
        calculate()
    } else {
        addSymbol(key)
    }
}

function calculate() {
    let operation = operations.innerHTML
    operation = operation.replaceAll("x", "*")
    operation = operation.replaceAll("÷", "/")
    
    operations.innerHTML = eval(operation)
}

function addSymbol(key) {
    operations.innerHTML += key
}
