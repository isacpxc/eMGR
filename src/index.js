const express = require('express');
const path  = require('path');
const router = express.Router();
const newedital = require("../routes/edital/new");


const app = express();
const port = 8080;
app.use(express.json())

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'../','views/form.html'));
    console.log(__dirname);
})

app.use('/new', newedital);

app.listen(port, () => {
    console.log(`Servindo em http://localhost:${port}`);
});

