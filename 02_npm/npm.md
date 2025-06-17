# DAY 2: Node.js, NPM, Core Modules, and Callbacks

## NPM and `package.json`

- **`npm init`**: Initializes a new Node.js project and creates a `package.json` file.
- **`package.json`**:  
  - Lists packages (dependencies) with their versions.
  - Contains metadata (name, version, description, etc.).
  - **Analogy**: Like a shopping list of clothes with sizes and details.
- **`package-lock.json`**:  
  - Stores detailed info about every installed package, including sub-dependencies and exact versions.
  - **Analogy**: Like a detailed bill with every item, discount, and detail.
- **Both files** help ensure smooth development and collaboration.

**Example `package.json`:**
```json
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```

---

## Functions and Callback Functions

- **Functions** can be written in different ways:
  ```javascript
  // Function Declaration
  function greet(name) {
    return `Hello, ${name}`;
  }

  // Function Expression
  const greet2 = function(name) {
    return `Hi, ${name}`;
  };

  // Arrow Function
  const greet3 = (name) => `Hey, ${name}`;
  ```

- **Callback Functions**:  
  A function passed as an argument to another function, called inside that function.
  ```javascript
  function processUserInput(callback) {
    const name = "Alice";
    callback(name);
  }

  processUserInput(function(name) {
    console.log("Hello " + name);
  });
  ```

---

## Core Modules of Node.js

- Node.js has many built-in modules: [Node.js API Docs](https://nodejs.org/api/)

### The `fs` Module

- Used for file operations.
- **Create a file and write a message:**
  ```javascript
  const fs = require('fs');
  fs.appendFile('greet.txt', 'Hello, Node.js!\n', () => {
    console.log('Message written to file.');
  });
  ```

### The `os` Module

- Used for system information.
- **Get user info and log username:**
  ```javascript
  const os = require('os');
  const user = os.userInfo();
  console.log('Username:', user.username);
  ```

- **Write username to a text file:**
  ```javascript
  fs.appendFile('user.txt', `Username: ${user.username}\n`, () => {
    console.log('Username written to file.');
  });
  ```

### The `module` Object

- `console.log(module)` shows module details and exports.

---

## Importing Files and Using `module.exports`

- **Create `notes.js`:**
  ```javascript
  // notes.js
  console.log('notes is starting...');
  module.exports.age = 5;
  module.exports.addNumber = function(a, b) {
    return a + b;
  };
  ```

- **Import and use in another file:**
  ```javascript
  // app.js
  const notes = require('./notes.js');
  console.log(notes.age); // 5
  console.log(notes.addNumber(2, 3)); // 5
  ```

---

## NPM Package: `lodash`

- Install with: `npm i lodash`
- Widely used utility library for data manipulation.

**Example:**
```javascript
const _ = require('lodash');
const arr = [1, 2, 3, 4, 5, 6];
const evens = _.filter(arr, n => n % 2 === 0);
console.log(evens); // [2, 4, 6]
```