const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, "public");

app.set('view engine', 'ejs');

app.get("", (req, resp) => {
    resp.sendFile(`${publicPath}/home.html`)
});

app.get('/Demo', (req, resp) => {
    const user = {
        name: "Virat",
        emailId: "kirankardile@gmail",
        city: "Pune",
    }

    resp.render("demo", {user});
});

app.listen(5000);