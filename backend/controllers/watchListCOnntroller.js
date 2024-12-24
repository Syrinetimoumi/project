const Watchlist = require('../models/WatchList');

const addMovieToWatchlist = async (req, res) => {
  const { userId, movieId } = req.body;

  try {
    let watchlist = await Watchlist.findOne({ userId });

    if (!watchlist) {
      // Create a new watchlist if it doesn't exist
      watchlist = new Watchlist({ userId, movies: [] });
    }

    // Check if the movie is already in the watchlist
    if (watchlist.movies.includes(movieId)) {
      return res.status(400).json({ message: 'Movie already in watchlist.' });
    }

    // Add the movie to the watchlist
    watchlist.movies.push(movieId);
    await watchlist.save();

    res.status(200).json({ message: 'Movie added to watchlist.', watchlist });
  } catch (error) {
    console.error('Error adding movie to watchlist:', error);
    res.status(500).json({ message: 'Failed to add movie to watchlist.' });
  }
};


const getUserWatchlist = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const watchlist = await Watchlist.findOne({ userId }).populate('movies');
      if (!watchlist) {
        return res.status(404).json({ message: 'Watchlist not found.' });
      }
  
      res.status(200).json({ movies: watchlist.movies });
    } catch (error) {
      console.error('Error fetching watchlist:', error);
      res.status(500).json({ message: 'Failed to fetch watchlist.' });
    }
  };
  const removeMovieFromWatchlist = async (req, res) => {
    const { userId, movieId } = req.body;
  
    try {
      const watchlist = await Watchlist.findOne({ userId });
  
      if (!watchlist) {
        return res.status(404).json({ message: 'Watchlist not found.' });
      }
  
      // Remove the movie from the watchlist
      watchlist.movies = watchlist.movies.filter((id) => id.toString() !== movieId);
      await watchlist.save();
  
      res.status(200).json({ message: 'Movie removed from watchlist.', watchlist });
    } catch (error) {
      console.error('Error removing movie from watchlist:', error);
      res.status(500).json({ message: 'Failed to remove movie from watchlist.' });
    }
  };
module.exports = { addMovieToWatchlist,removeMovieFromWatchlist, getUserWatchlist };
