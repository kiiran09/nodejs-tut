const express = require("express");
const dbConnection = require("./dbConnection");

const app = express();

app.use(express.json());

app.put("/:name", async (req, resp) => {
  let data = await dbConnection();
  let result = await data.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  resp.send({ result: "Updated" });
});

app.listen(5000);
