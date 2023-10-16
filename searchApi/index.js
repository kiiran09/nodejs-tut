const express = require("express");
const products = require("./products");
require("./connection");
const app = express();

app.use(express.json());

app.get("/get/:key", async (req, resp) => {
  console.log(req.params.key);
  let data = await products.find({
    $or: [{ name: { $regex: req.params.key } }],
  });
  resp.send(data);
});

app.listen(5000);
