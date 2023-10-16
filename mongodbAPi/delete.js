const express = require("express");
const dbConnection = require("./dbConnection");

const app = express();

app.use(express.json());

app.delete("/:name", async (req, resp) => {
  let data = await dbConnection();
  let result = await data.deleteOne({ name: req.params.name });
  resp.send({ result: "deleted" });
});

app.listen(5000);
