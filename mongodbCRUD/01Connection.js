const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "mydb";
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection("products");
  let resp = await collection.find({}).toArray();
  console.log(resp);
}

getData();
