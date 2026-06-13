// Get the display element
let display = document.getElementById('result');

// Variable to store the current expression
let currentExpression = '';

// Function to add numbers to display
function appendNumber(num) {
    currentExpression += num;
    display.value = currentExpression;
}

// Function to add operators
function appendOperator(op) {
    // Check if last character is not an operator
    let lastChar = currentExpression[currentExpression.length - 1];
    if (lastChar && !isNaN(lastChar)) {
        currentExpression += op;
        display.value = currentExpression;
    }
}

// Function to clear everything
function clearDisplay() {
    currentExpression = '';
    display.value = '0';
}

// Function to delete last character
function deleteLast() {
    currentExpression = currentExpression.slice(0, -1);
    if (currentExpression === '') {
        display.value = '0';
    } else {
        display.value = currentExpression;
    }
}

// Function to calculate the result
function calculate() {
    try {
        // Using eval for simple calculations (for learning purpose)
        let result = eval(currentExpression);
        
        // Check if result is valid number
        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Error';
            currentExpression = '';
        } else {
            // Round to 2 decimal places if needed
            result = Math.round(result * 100) / 100;
            display.value = result;
            currentExpression = result.toString();
        }
    } catch (error) {
        display.value = 'Error';
        currentExpression = '';
    }
}

// Optional: Add keyboard support
document.addEventListener('keydown', function(event) {
    let key = event.key;
    
    // Numbers 0-9
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    }
    // Operators
    else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendOperator(key);
    }
    // Enter key for calculation
    else if (key === 'Enter') {
        calculate();
    }
    // Backspace to delete
    else if (key === 'Backspace') {
        deleteLast();
    }
    // Escape to clear
    else if (key === 'Escape') {
        clearDisplay();
    }
    // Decimal point
    else if (key === '.') {
        appendNumber('.');
    }
});