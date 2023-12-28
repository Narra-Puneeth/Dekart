const express =require('express');

const {signupUser,loginUser,resetpwd}=require('../controllers/userController')

const {listItem}=require('../controllers/itemController')

const router =express.Router();

router.post('/login',loginUser);


router.post('/signup',signupUser);

router.put('/resetpwd',resetpwd)

router.post('/list',listItem)

module.exports=router