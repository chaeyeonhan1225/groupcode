const express = require('express');
const router = express.Router();

router.post('/login',(req,res,next)=>{
    const { id, password } = req.body;
    console.log(id,password);
    return res.status(200).json({
        message: "login sucessed"
    });
});

router.post('/join',(req,res,next)=>{
    const { id, password } = req.body;
    
});

module.exports = router;