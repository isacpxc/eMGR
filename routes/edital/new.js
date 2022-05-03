const express = require('express');
const router = express.Router();


router.get('/new/edital', (req, res)=>{
    res.json({content: req.body});
})

module.exports = router;
