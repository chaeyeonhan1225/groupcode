const express = require('express');
const router = express.Router();

router.post('/',(req,res,next)=>{
    const content = req.body;
    // task 저장해야됨!!
    if(content){
        // db에 저장
        console.log(content);
    } else {
        res.status(200);    // post 저장 실패
    }
});

module.exports = router;