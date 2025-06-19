# MongoDB Shell Commands Example Notes

## 1. Create and Switch Database

```shell
use db
```

## 2. Create a Collection

```shell
db.createCollection('user');
```

## 3. Insert a Document

```shell
db.user.insertOne({ id: 1, username: 'Dev', age: 20 });
```

## 4. Find All Documents

```shell
db.user.find();
```

## 5. Find Documents with a Condition

```shell
db.user.find({ age: { $gt: 19 } });
```

## 6. Update a Document

- Update the username where age is 18:

```shell
db.user.updateOne({ age: 18 }, { $set: { username: 'madhav' } });
```

- Update username and age where age is 18:

```shell
db.user.updateOne({ age: 18 }, { $set: { username: 'zoro', age: 19 } });
```

## 7. Delete a Document

- Delete a user with `id: 1`:

```shell
db.user.deleteOne({ id: 1 });
```

**Note:**  
If your collection is named `user`, use `db.user`.  
If your collection is named `users`, use `db.users`.

---

## Example Output

After these operations, your collection might look like:

```json
[
  {
    "_id": ObjectId("..."),
    "id": 2,
    "username": "zoro",
    "age": 19
  }
]
```