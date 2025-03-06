let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstOperand = null;


function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === "") return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        operator = op;
        currentInput = "";
    } else {
        calculateResultSafe();
        operator = op;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
    }
}

function toggleSign() {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }
}

function reciprocal() {
    if (currentInput && parseFloat(currentInput) !== 0) {
        currentInput = (1 / parseFloat(currentInput)).toString();
        updateDisplay();
    }
}

function square() {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) ** 2).toString();
        updateDisplay();
    }
}

function squareRoot() {
    if (currentInput && parseFloat(currentInput) >= 0) {
        currentInput = Math.sqrt(parseFloat(currentInput)).toString();
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = "";
    firstOperand = null;
    operator = "";
    updateDisplay();
}

function clearEntry() {
    currentInput = "";
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculateResultSafe() {
    if (firstOperand !== null && operator !== "" && currentInput !== "") {
        let secondOperand = parseFloat(currentInput);
        let result;
        
        if (operator === "+") {
            result = firstOperand + secondOperand;
        } else if (operator === "-") {
            result = firstOperand - secondOperand;
        } else if (operator === "*") {
            result = firstOperand * secondOperand;
        } else if (operator === "/") {
            result = secondOperand !== 0 ? firstOperand / secondOperand : "Error";
        } else if (operator === "%") {
            result = firstOperand % secondOperand;
        }
        
        currentInput = result.toString();
        firstOperand = null;
        operator = "";
        updateDisplay();
    }
}

function updateDisplay() {
    display.textContent = currentInput === "" ? "0" : currentInput;
}
