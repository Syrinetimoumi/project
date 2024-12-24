const express=require('express');
const router = express.Router();
const movieController = require('../controllers/MovieController');


router.post('/addMovie', movieController.addMovie);
router.get('/getMovies', movieController.getMovies);
router.get('/getMovieById/:id', movieController.getMovieById);
router.patch('/updateMovie/:id', movieController.updateMovie);
router.delete('/deleteMovie/:id', movieController.deleteMovie);


module.exports=router;