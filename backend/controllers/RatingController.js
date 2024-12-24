const Rating = require('../models/Rating');
const User = require('../models/User');
const Movie = require('../models/Movie');


const addRating = async (req, res) => {

    try{
        const {user , movie , score}=req.body;

        console.log("Received userId:", user);
        console.log("Received movieId:", movie);

        if(score < 1 || score > 5){
            return res.status(400).json({error: 'Score must be between 1 and 5'});
        }

       
        
        if(!user ||!movie){
            return res.status(400).json({error: 'User or movie not found'});
        }

        const foundUser=await User.findById(user);
        console.log("User found:", foundUser);
        const foundMovie=await Movie.findById(movie);
        console.log("Movie found:", foundMovie);

        if (!foundUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        if (!foundMovie) {
            return res.status(404).json({ error: 'Movie not found' });
        }

        const rating = new Rating({user,movie,score});
        await rating.save();

        foundMovie.ratings.push(rating._id);
        await foundMovie.save();

        //update average rating
        const ratings = await Rating.find({ movie });
        const averageRating = ratings.reduce((acc, r) => acc + r.score, 0) / ratings.length;
        foundMovie.averageRating = averageRating;
        await foundMovie.save();





        res.status(201).json(rating);
   
    }catch(err){
        res.status(400).json({error: err.message});
    }
}


module.exports = {
    addRating,
};