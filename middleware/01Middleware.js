const express = require("express");
const app = express();

const reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("Please provide age");
  } else if (req.query.age < 18) {
    resp.send("You cant proceed further");
  } else {
    next();
  }
};

app.use(reqFilter);

app.get("", (req, resp) => {
  resp.send("Home Page");
});

app.get("/about", (req, resp) => {
  resp.send("About page");
});

app.listen(5000);
