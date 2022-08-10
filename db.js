const { MongoClient } = require("mongodb");

let dbConnection;
let uri =
  "mongodb+srv://honmetha:A1b2C3d4@cluster0.vz72pzy.mongodb.net/?retryWrites=true&w=majority";

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
