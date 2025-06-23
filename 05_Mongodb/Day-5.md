# DAY-05 Solutions

## Question 1: Create a POST Method API

**Create a POST API to store menu items (`/menu`):**
```javascript
app.post('/menu', async (req, res) => {
  try {
    const menuItemData = req.body; // Request body contains menu item data
    const menuItem = new MenuItem(menuItemData); // Mongoose model
    const menu_data = await menuItem.save(); // Save to database
    console.log('Menu item saved');
    res.status(201).json(menu_data);
  } catch (error) {
    console.error('Error creating menu item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
```

---

## Question 2: Create a GET Method API

**Create a GET API to list all menu items (`/menu`):**
```javascript
app.get('/menu', async (req, res) => {
  try {
    const menuItems = await MenuItem.find(); // Find all menu items
    res.json(menuItems); // Respond with JSON
  } catch (error) {
    console.error('Error fetching menu items:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
```

---

## Question 3: Creating a POST API with Express and Mongoose

### a) Mongoose Schema for "Task"
```javascript
const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ['High', 'Medium', 'Low'],
    default: 'Medium',
  },
  dueDate: {
    type: Date,
    required: true,
  },
});
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
```

### b) POST API Endpoint `/api/tasks`
```javascript
// POST /api/tasks - Create a new task
app.post('/api/tasks', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});
```

---

## Question 4: Creating a GET API with Express and Mongoose

**GET API Endpoint `/api/tasks` to retrieve all tasks:**
```javascript
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});
```
````# DAY-05 Solutions

## Question 1: Create a POST Method API

**Create a POST API to store menu items (`/menu`):**
```javascript
app.post('/menu', async (req, res) => {
  try {
    const menuItemData = req.body; // Request body contains menu item data
    const menuItem = new MenuItem(menuItemData); // Mongoose model
    const menu_data = await menuItem.save(); // Save to database
    console.log('Menu item saved');
    res.status(201).json(menu_data);
  } catch (error) {
    console.error('Error creating menu item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
```

---

## Question 2: Create a GET Method API

**Create a GET API to list all menu items (`/menu`):**
```javascript
app.get('/menu', async (req, res) => {
  try {
    const menuItems = await MenuItem.find(); // Find all menu items
    res.json(menuItems); // Respond with JSON
  } catch (error) {
    console.error('Error fetching menu items:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
```

---

## Question 3: Creating a POST API with Express and Mongoose

### a) Mongoose Schema for "Task"
```javascript
const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ['High', 'Medium', 'Low'],
    default: 'Medium',
  },
  dueDate: {
    type: Date,
    required: true,
  },
});
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
```

### b) POST API Endpoint `/api/tasks`
```javascript
// POST /api/tasks - Create a new task
app.post('/api/tasks', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});
```

---

## Question 4: Creating a GET API with Express and Mongoose

**GET API Endpoint `/api/tasks` to retrieve all tasks:**
```javascript
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  } 