const express = require('express');
const router = express.Router();

//receive data to create edital
router.get('/edital', (req, res)=>{
    const infoForm = {             
        nameEd: req.query.nameEd,       // edital name
        sNameEd: req.query.sNameEd,     // short name edital
        dStartSub: req.query.dStartSub, // beginning date of submissions
        dEndSub: req.query.dEndSub,    // end date of submissions
        dStartRev: req.query.dStartRev, // beginning date of review/assesment
        dEndRev: req.query.dEndRev,     // end date of review/assesment
        dStartEv: req.query.dStartEv,   // beginning date event
        dEndEv: req.query.dEndEv,       // end date event
        logo: req.query.logo,           // logo.png
        catSheet: req.query.catSheet,   // catalog sheet
    }
    res.json(infoForm);
})

module.exports = router;
