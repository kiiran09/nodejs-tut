const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, resp) => {
  resp.render("home");
});

app.get("/about", (req, resp) => {
  resp.render("about");
});

app.listen(5000);
