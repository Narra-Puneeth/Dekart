const express =require('express');

const {signupUser,loginUser,resetpwd}=require('../controllers/userController')

const router =express.Router();

router.post('/login',loginUser);


router.post('/signup',signupUser);

router.put('/resetpwd',resetpwd)

module.exports=router