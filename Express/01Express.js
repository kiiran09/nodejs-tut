const express = require('express');
const app = express();

app.get('', (req, res) => {
    console.log(req.query.name);
    res.send(`Hello ${req.query.name}, This is Home Page`);
});

app.get('/about', (req, res) => {
    res.send("Hello, This is About Page. I am Learning Node Js");
});

app.get('/help', (req, res) => {
    res.send("This is Help Page. If you want any type of help regarding node js then conatct this number")
});

app.listen(5000);