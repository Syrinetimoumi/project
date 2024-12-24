const Movie = require('../models/Movie');

const addMovie= async (req,res)=>{
    const { title, overview, imageURL, releaseDate, originalLanguage, category } = req.body;
    try {
        const movie = new Movie({
            title,
            overview,
            releaseDate,
            originalLanguage,
            category,
            imageURL
        });
        await movie.save();
        res.status(201).json(movie);
      } catch (error) {
        res.status(400).json({ error: error.message });
}};

const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateMovie=async(req,res)=>{
    try{
        const id=req.params.id;
        const updates=req.body;

        const updatedMovie=await Movie.findByIdAndUpdate(id,updates,{new:true});
        if(!updatedMovie){
            return res.status(404).json({ message: 'Movie not found' });
        };
        res.status(200).json(updatedMovie);
    
    }catch(error){
        res.status(400).json({ error: error.message });
    }
};

const deleteMovie=async(req,res)=>{
    try{
        const id=req.params.id;
        const deletedMovie=await Movie.findByIdAndDelete(id);
        if(!deletedMovie){
            return res.status(404).json({ message: 'Movie not found' });
        };
        res.status(200).json(deletedMovie);
    }catch(error){
        res.status(400).json({ error: error.message });
    }
};

const getMovieById=async(req,res)=>{
    const {id}=req.params;
    try{
    const movie= await Movie.findById(id);
        if(!movie){
            res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json(movie);

    }catch(error){
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    addMovie,
    getMovies,
    updateMovie,
    deleteMovie,
    getMovieById
}