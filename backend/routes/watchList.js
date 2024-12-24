const express = require('express');


const  WatchlistCont = require('../controllers/watchListCOnntroller');
const router = express.Router();

router.post('/add', WatchlistCont.addMovieToWatchlist);
router.get('/:userId', WatchlistCont.getUserWatchlist);
router.delete('/remove', WatchlistCont.removeMovieFromWatchlist);
module.exports = router;
