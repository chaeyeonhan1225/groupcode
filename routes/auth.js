const express = require('express');
const router = express.Router();

router.post('/login',(req,res,next)=>{
    const User = req.body;
    if(User){
        console.log(User);
        console.log("id: ",User.id);
        console.log("password: ",User.password);

        res.send("success").status(200);
    } else {
        res.send("Error").status(404);
    }
});

router.post('/join',(req,res,next)=>{
    const newUser = req.body;
    if(newUser){
        const user_id = newUser.id;
        const user_password = newUser.password;
        res.send("success").status(200);
    } else {
        res.send("Error").status(404);
    }
});

module.exports = router;