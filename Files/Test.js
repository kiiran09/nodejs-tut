const express = require('express');
const path = require('path');

const app = express();
const filePath = path.join(__dirname, "Files");

app.use(express.static(filePath));

app.listen(6000);