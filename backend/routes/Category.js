const express=require('express');
const router =express.Router();
const CategoryController=require('../controllers/CategoryController.js');

router.post('/addCategory', CategoryController.addCategory);
router.get('/getCategories', CategoryController.getCategories);
module.exports=router;