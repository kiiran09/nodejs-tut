const express = require("express");
const products = require("./products");
require("./connection");

const app = express();
app.use(express.json());

app.post("/create", async (req, resp) => {
  let data = new products(req.body);
  let result = await data.save();
  console.log(result);
  resp.send(result);
});

app.get("/get", async (req, resp) => {
  let data = await products.find();
  resp.send(data);
});

app.put("/update/:name", async (req, resp) => {
  let data = await products.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  console.log(data);
});

app.delete("/delete/:name", async (req, resp) => {
  let data = await products.deleteMany({ name: req.params.name });
  resp.send(data);
});
app.listen(5000);
