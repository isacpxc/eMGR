const express = require('express');
const router = express.Router();


router.get('/edital', (req, res)=>{
    res.json(req.body);
})

module.exports = router;
