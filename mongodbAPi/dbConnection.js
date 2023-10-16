const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "mydb";
const client = new MongoClient(url);

const dbConnection = async () => {
  const result = await client.connect();
  const db = result.db(database);
  return db.collection("products");
};

module.exports = dbConnection;
