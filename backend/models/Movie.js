const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    overview: { type: String },
    releaseDate: { type: Date },
    imageURL:{ type: String},
    averageRating: { type: Number , default: 0},
    originalLanguage: { type: String, required: true},
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating',  default: [] }]
});

module.exports = mongoose.model('Movie', MovieSchema);