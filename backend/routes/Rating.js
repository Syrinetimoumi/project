const express = require('express');
const router=express.Router();

const RatingController = require('../controllers/RatingController');

router.post('/addRating', RatingController.addRating);

module.exports=router;