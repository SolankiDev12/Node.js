# DAY-06 Solutions

## Question 1: Create a Parameterized GET Method API for MenuItem by Taste Type

**Endpoint:** `/menu/:taste`

```javascript
router.get('/:taste', async (req, res) => {
  try {
    const tasteType = req.params.taste; // Extract the taste type from the URL parameter
    if (tasteType === 'sweet' || tasteType === 'sour' || tasteType === 'spicy') {
      const response = await MenuItem.find({ taste: tasteType });
      console.log('response fetched');
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: 'Invalid Taste type' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
```

---

## Question 2: Create a PUT Method API to Update MenuItem Records

**Endpoint:** `/menu/:id`

```javascript
router.put('/:id', async (req, res) => {
  try {
    const menuId = req.params.id; // Extract the id of Menu Item from the URL parameter
    const updatedMenuData = req.body; // Updated data for the Menu Item
    const response = await MenuItem.findByIdAndUpdate(menuId, updatedMenuData, {
      new: true, // Return the updated document
      runValidators: true, // Run Mongoose validation
    });
    if (!response) {
      return res.status(404).json({ error: 'Menu Item not found' });
    }
    console.log('data updated');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
```

---

## Question 3: Create a DELETE Method API to Delete MenuItem Records

**Endpoint:** `/menu/:id`

```javascript
router.delete('/:id', async (req, res) => {
  try {
    const menuId = req.params.id; // Extract the Menu's ID from the URL parameter
    const response = await MenuItem.findByIdAndRemove(menuId);
    if (!response) {
      return res.status(404).json({ error: 'Menu Item not found' });
    }
    console.log('data delete');
    res.status(200).json({ message: 'Menu Deleted Successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
```