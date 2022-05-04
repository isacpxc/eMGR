const express = require('express');
const router = express.Router();
const newedital = require("../routes/edital/new");

const app = express();
const port = 8080;
app.use(express.json())

app.use('/new', newedital);

app.listen(port, () => {
    console.log(`Servindo em http://localhost:${port}`);
});

