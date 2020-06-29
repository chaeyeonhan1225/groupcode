const express = require('express');
const router = express.Router();

router.post('/',(req,res,next)=>{
    const content = req.body;
    if(content){
        // db에 저장
        console.log(content);
    }
});

module.exports = router;