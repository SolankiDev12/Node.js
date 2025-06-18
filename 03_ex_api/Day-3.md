# DAY-03 Solutions

## Problem 1: Understanding Servers and Express.js

- **What is a server in Node.js?**  
  A server in Node.js is a computer program that receives and responds to requests from clients (like web browsers or mobile apps) over a network. It processes requests and sends back appropriate responses.

- **How to create a basic server using Express.js:**
  ```javascript
  const express = require('express');
  const app = express();

  app.get('/', (req, res) => {
    res.send('Hello from Express server!');
  });

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  ```

---

## Problem 2: JSON Manipulation

a) **What is JSON?**  
JSON (JavaScript Object Notation) is a lightweight data interchange format used to exchange data between a server and a client. It's easy for humans to read and write, and easy for machines to parse and generate.

b) **Extract the value of the "age" key from JSON data:**
```javascript
const jsonObject = { "name": "Alice", "age": 25, "hobbies": ["reading", "painting"] };
const age = jsonObject.age;
```

c) **Convert an object into a JSON data string:**
```javascript
const jsonString = JSON.stringify({ "title": "Book", "pages": 200 });
```

---

## Problem 3: API and Endpoints

a) **What is an API?**  
An API (Application Programming Interface) is a set of rules and protocols that allows different software components to communicate and interact with each other. It defines how requests and responses should be structured.

b) **What is an endpoint?**  
An endpoint is a specific URL that represents a particular function or service provided by an API. It's the specific location where clients can make requests to access certain data or perform actions.

c) **Example endpoint in a social media app:**  
`/users/{username}` to retrieve user information based on their username.

---

## Problem 4: Creating a Route with Express.js

a) **What is the HTTP GET method used for?**  
The HTTP GET method is used to request data from a server. It's often used to retrieve information or resources from a specified URL.

b) **Code to create a simple Express.js route:**
```javascript
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
```

---

## Problem 5: JSON Parsing and Object Conversion

a) **Parse a JSON data string into a JavaScript object:**
```javascript
const jsonData = '{"product": "Laptop", "price": 999.99}';
const parsedObject = JSON.parse(jsonData);
console.log(parsedObject.product); // Output: Laptop
```

b) **Convert an object into a JSON data string:**
```javascript
const objectToConvert = { "name": "Bob", "age": 30 };
const jsonString = JSON.stringify(objectToConvert);
console.log(jsonString); // Output: {"name":"Bob","age":30}
```

---

## Problem 6: Building a Basic API

**Express.js route for a weather API:**
```javascript
const express = require('express');
const app = express();

app.get('/weather', (req, res) => {
  const weatherData = {
    temperature: 25,
    conditions: 'Sunny',
    city: 'Los Angeles'
  };
  res.json(weatherData);
});

app.listen(3000, () => {
  console.log('Server is running on