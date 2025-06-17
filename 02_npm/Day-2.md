# DAY-02 Solutions

## Problem 1: NPM and Package.json

**NPM (Node Package Manager)** is a tool that helps you manage libraries and packages in your Node.js projects. It allows you to easily install, update, and remove packages that you need for your project.

**Sample `package.json`:**
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```

---

## Problem 2: Writing Functions

**Function to calculate the area of a circle:**
```javascript
function calculateCircleArea(radius) {
  return Math.PI * radius ** 2;
}

console.log(calculateCircleArea(5));  // Output: 78.53981633974483
console.log(calculateCircleArea(10)); // Output: 314.1592653589793
```

---

## Problem 3: Callback Functions

**Function to perform operations using callbacks:**
```javascript
function performOperation(num1, num2, operationCallback) {
  return operationCallback(num1, num2);
}

function add(x, y) { return x + y; }
function subtract(x, y) { return x - y; }
function multiply(x, y) { return x * y; }
function divide(x, y) { return x / y; }

console.log(performOperation(10, 5, add));      // Output: 15
console.log(performOperation(10, 5, subtract)); // Output: 5
console.log(performOperation(10, 5, multiply)); // Output: 50
console.log(performOperation(10, 5, divide));   // Output: 2
```

---

## Problem 4: Using the 'fs' Module

**Read and display contents of `notes.txt`:**
```javascript
const fs = require('fs');
fs.readFile('notes.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(data);
});
```

---

## Problem 5: Using 'os' Module

**Display system information:**
```javascript
const os = require('os');
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Platform:", os.platform());
console.log("Number of CPU Cores:", os.cpus().length);
```

---

## Problem 6: 'lodash' Usage

**Sum of all even numbers in an array using lodash:**
```javascript
const _ = require('lodash');
function sumOfEvenNumbers(numbers) {
  const evenNumbers = _.filter(numbers, num => num % 2 === 0);
  return _.sumBy(evenNumbers);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];