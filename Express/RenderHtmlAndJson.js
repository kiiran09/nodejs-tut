const express = require('express');
const app = express();

app.get("", (req, resp) => {
    resp.send(`
    <h1>This is home page</h1>
    <a href = "/about">Go to about page</a>
    <a href = "/json">Go to json page</a>
    `);
});

app.get("/about", (req, resp) => {
    resp.send(`
        <input type = "text" value = "${req.query.name}" placeholder="name"></input>
        <a href = "/">Go to home page</a>
        <a href = "/json">Go to json page</a>
    `);
});

app.get("/json", (req, resp) => {
    resp.send({
        name: "Kiran",
        rollNo: 1001
    })
})

app.listen(3000);