const express = require('express');
const router=express.Router();
const userContorller=require('../controllers/UserController.js');

router.post('/addUser', userContorller.addUSer);
router.get('/getUsers', userContorller.getUsers);
router.post('/login', userContorller.login);

module.exports=router;