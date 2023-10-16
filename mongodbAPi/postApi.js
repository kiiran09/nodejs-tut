const express = require("express");
const dbConnection = require("./dbConnection");
const app = express();

app.use(express.json());

app.post("/", async (req, resp) => {
  let data = await dbConnection();
  let result = await data.insertOne(req.body);
//   console.log(data);
  resp.send(result);
});

app.listen(5000);
