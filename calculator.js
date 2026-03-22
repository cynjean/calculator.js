// Calculator functions
const history = [];

// Function to add calculation to history
function addToHistory(a, b, operator, result) {
    history.push({
        operand1: a,
        operand2: b,
        operator: operator,
        result: result,
    });
}

// Addition function
function add(a, b) {
    const result = a + b;
    addToHistory(a, b, "+", result);
    return result;
} 

// Subtraction function
function subtract(a, b) {
    const result = a - b;
    addToHistory(a, b, "-", result);
    return result;
}

// Multiplication function
function multiply(a, b) {
    const result = a * b;
    addToHistory(a, b, "*", result);
    return result;
}

// Division function
function divide(a, b) {
    if (b === 0) {
        console.log("error: Cannot divide by zero");
        return null;
    }
    const result = a / b;
    addToHistory(a, b, "/", result);
    return result;
}

// Function to show history
function showHistory() {
    if (history.length === 0) {
        console.log("No stored calculations.");
        return;
    }
    console.log("Calculation History:");
    history.forEach((item, index) => {
        console.log(
            `${index + 1}: ${item.operand1} ${item.operator} ${item.operand2} = ${item.result}`
        );
    }); 
}

// Example usage
add(5, 3); // 8
subtract(10, 4); // 6
multiply(7, 6); // 42
divide(20, 5); // 4
divide(10, 0); // error: Cannot divide by zero

// Display history
showHistory();

