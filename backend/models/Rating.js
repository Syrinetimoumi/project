const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    score: { type: Number, required: true, min: 1, max: 5 }
});

module.exports = mongoose.model('Rating', RatingSchema);