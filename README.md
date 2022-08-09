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

https://www.postman.com/downloads/

- Postman

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
db.<collection>.find({ $or: [{ <field> : 7 }, { <field> : 9 }] })
```

```sh
db.<collection>.find({ $or: [{ <field1> : 7 }, { <field2> : "Terry Pratchett" }] })
```

```sh
db.<collection>.find({ $or: [{ <field> : { $lt: 300 }}, { <field> : {$gt: 400}}] })
```

```sh
db.<collection>.find({ <field>: { $in : [7,8,9] }})
```

```sh
db.<collection>.find({$or: [{ <field> : 7}, { <field> : 8}, { <field> : 9}]})
```

```sh
db.<collection>.find({ <field> : { $nin: [9] }})
```

```sh
db.<collection>.find({ <field> : "fantasy" })
```

```sh
db.<collection>.find({ <field> : ["fantasy"] })
```

```sh
db.<collection>.find({ <field> : ["fantasy", "magic"] })
```

```sh
db.<collection>.find({ <field> : { $all : ["fantasy", "magic"] }})
```

```sh
db.<collection>.find({ <field.object_key> : <value> })
```

```sh
db.<collection>.deleteOne({ <field> : <value> })
```

```sh
db.<collection>.deleteMany({ <field> : <value> })
```

```sh
db.<collection>.updateOne({ <field> : <value> }, { $set: { <field1> : <value> , <field2> : <value> }})
```

```sh
db.<collection>.updateMany({ <field> : <value> }, { $set: { <field>: <value> }})
```

```sh
db.<collection>.updateOne({ <field> : <value> }, { $inc: { pages: 2 }})
```

```sh
db.<collection>.updateOne({ <field> : <value> }, { $inc: { pages: -2 }})
```

```sh
db.<collection>.updateOne({ <field> : <value> }, { $pull: { genres: 'sci-fi' }})
```

```sh
db.<collection>.updateOne({ <field> : <value> }, { $push: { genres: 'sci-fi' }})
```

```sh
db.<collection>.updateOne({ <field> : <value> }, { $push: { genres: { $each: ['1','2'] }}})
```

```sh
db.books.find({rating: 8}).explain('executionStats')
```

```sh
db.books.createIndex({ rating: 8 })
```

```sh
db.books.getIndexes()
```

```sh
db.books.dropIndex({rating: 8})
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
