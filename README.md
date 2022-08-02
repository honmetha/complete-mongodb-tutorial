# Complete MongoDB Tutorial

MongoDB is an open source NoSQL database management program. Instead of tables columns and rows, it uses collections and documents.

MongoDB stores data inside of collections. Inside of a collection, there are documents which stores as BSON (Binary JSON). BSON is very similar to JSON and when fetching documents will ultimately return JSON objects.

<img src="./images/mongodb-1.png" alt="MongoDB Collection">
<img src="./images/mongodb-2.png" alt="MongoDB Documents">

## 🛠 Installation

https://www.mongodb.com/try/download/community

- MongoDB Community Server
- MongoDB Compass (Only for learning purposes and to visualize the data)
- MongoDB Shell

## 🤖 Basic Commands

```sh
show dbs
```

```sh
use <database_name>
```

```sh
db
```

```sh
show collections
```

```sh
db.<collection>.insertOne({ <field> : <value> })
```

```sh
db.<collection>.insertMany([{ <field1> : <value> }, { <field2> : <value> }])
```

```sh
db.<collection>.find()
```

```sh
it
```

```sh
db.<collection>.find({ <field> : <value> })
```

```sh
db.<collection>.find({ <field1> : <value> , <field2> : <value> })
```

```sh
db.<collection>.find({}, { <field> : 0, <field> : 1})
```

```sh
db.<collection>.findOne({ <field> : <value> })
```

```sh
db.<collection>.find().count()
```

```sh
db.<collection>.find().limit(3)
```

```sh
db.<collection>.find().sort({ <field> : 1 })
```

```sh
db.<collection>.find().sort({ <field> : 1 }).limit(3)
```

```sh
db.<collection>.find({ <field> : {$gt: 7} })
```

```sh
db.<collection>.find({ <field> : {$lt: 8} })
```

```sh
db.<collection>.find({ <field> : {$lte: 8} })
```

```sh
db.<collection>.find({ <field> : {$gt: 7}, <field> : <value> })
```

```sh
db.books.find({ $or: [{rating: 7}, {rating: 9}] })
```

```sh
db.books.find({ $or: [{rating: 7}, {author: "Terry Pratchett"}] })
```

```sh
db.books.find({ $or: [{pages: {$lt: 300}}, {pages: {$gt: 400}}] })
```

```sh
db.books.find({ rating: {$in: [7,8,9]} })
```

```sh
db.books.find({$or: [{rating: 7}, {rating: 8}, {rating: 9}]})
```

```sh
db.books.find({rating: {$nin: [9]}})
```

```sh
db.books.find({genres: "fantasy"})
```

```sh
db.books.find({genres: ["fantasy"]})
```

```sh
db.books.find({genres: ["fantasy", "magic"]})
```

```sh
db.books.find({genres: {$all: ["fantasy", "magic"]}})
```

```sh
db.books.find({"reviews.name": "Luigi"})
```

```sh
db.books.deleteOne({_id: ObjectId("62e40dc7c571c0f6761e9785")})
```

```sh
db.books.deleteMany({author: 'Terry Pratchett'})
```

```sh
db.books.updateOne({_id: ObjectId("62e40dc7c571c0f6761e9785")}, {$set: {rating: 8, pages: 360}})
```

```sh
db.books.updateMany({author: 'Terry Pratchett'}, {$set: {author: 'Terry Pratchet'}})
```

```sh
db.books.updateOne({_id: ObjectId("62e40dc7c571c0f6761e9785")}, {$inc: {pages: 2}})
```

```sh
db.books.updateOne({_id: ObjectId("62e40dc7c571c0f6761e9785")}, {$inc: {pages: -2}})
```

```sh
db.books.updateOne({_id: ObjectId("62e40dc7c571c0f6761e9782")}, {$pull: {genres: 'sci-fi'}})
```

```sh
db.books.updateOne({_id: ObjectId("62e40dc7c571c0f6761e9782")}, {$push: {genres: 'sci-fi'}})
```

```sh
db.books.updateOne({_id: ObjectId("62e40dc7c571c0f6761e9782")}, {$push: {genres: {$each: ['1','2']}}})
```

```sh
help
```

```sh
exit
```

## 📖 Chapters

1. What is MongoDB?
1. Installing MongoDB
1. Collections & Documents
1. Using MongoDB Compass
1. Using the MongoDB Shell
1. Adding New Documents
1. Finding Documents
1. Sorting & Limiting Data
1. Nested Documents
1. Operators & Complex Queries
1. Using \$in & $nin
1. Querying Arrays
1. Deleting Documents
1. Updating Documents
1. MongoDB Drivers
1. Connecting to MongoDB
1. Cursors & Fetching Data
1. Finding Single Documents
1. Using POSTMAN
1. Handling POST Requests
1. Handling DELETE Requests
1. PATCH Requests
1. Pagination
1. Indexes
1. MongoDB Atlas
