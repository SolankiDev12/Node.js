# DAY-04 Solutions

## Question 1: Difference Between MongoDB Server & Node.js Server

**MongoDB Server:**  
- Responsible for storing and managing data in the MongoDB database.
- Handles data storage, retrieval, and manipulation operations.
- **Use case:** When you need a database to store user profiles, product catalogs, or any application data.

**Node.js Server:**  
- A runtime environment that executes JavaScript code.
- Handles incoming requests from clients, processes them, and can interact with databases like MongoDB to retrieve or update data.
- **Use case:** When you need to build an API, serve web pages, or handle business logic for your application.

---

## Question 2: MongoDB Queries

a) **Create a new document in the "students" collection:**
```javascript
db.students.insertOne({ name: "John", age: 20, grade: "A" });
```

b) **Update the "age" field of an employee named "John" to 30:**
```javascript
db.employees.updateOne({ name: "John" }, { $set: { age: 30 } });
```

c) **Delete a document from the "products" collection with the name "Product A":**
```javascript
db.products.deleteOne({ name: "Product A" });
```

d) **Retrieve all orders where the total amount is greater than $100:**
```javascript
db.orders.find({ totalAmount: { $gt: 100 } });
```

---

## Question 3: SQL vs. MongoDB

- **Data Structure:**  
  - **SQL:** Uses structured tables with rows and columns.
  - **MongoDB:** Uses flexible, dynamic documents in collections.

- **Querying Language:**  
  - **SQL:** Uses SQL (Structured Query Language).
  - **MongoDB:** Uses a JavaScript-like syntax for queries.

- **Use Cases:**  
  - **SQL:** Best for applications with well-defined, structured data (e.g., financial systems).
  - **MongoDB:** Better for projects with changing or unstructured data (e.g., content management systems, real-time analytics).

---

## Question 4: Query Comparison

a) **Retrieve products with the category "Electronics":**  
- **MongoDB:**  
  ```javascript
  db.products.find({ category: "Electronics" })
  ```
- **SQL:**  
  ```sql
  SELECT * FROM products WHERE category = "Electronics"
  ```

b) **Retrieve a user named "Alice":**  
- **MongoDB:**  
  ```javascript
  db.users.findOne({ username: "Alice" })
  ```
- **SQL:**  
  ```sql
  SELECT * FROM users WHERE username = "Alice"
  ```

c) **Calculate the total amount of orders grouped by status:**  
- **MongoDB:**  
  ```javascript
  db.orders.aggregate([
    { $group: { _id: "$status", total: { $sum: "$amount" } } }
  ])
  ```
- **SQL:**  
  ```sql
  SELECT status, SUM(amount) as total FROM orders GROUP BY status
  ```

**Summary:**  
- Both MongoDB and SQL queries in each pair achieve the same result, but use different syntax and approaches based on their respective data models.