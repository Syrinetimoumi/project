const express=require('express');
const app = express();
const userRoutes=require('./routes/User');
const cors=require('cors');
const mongoose = require('mongoose');
const categoryRoutes= require('./routes/Category')
const movieRoutes= require('./routes/Movie')
const ratingRoutes= require('./routes/Rating');
const watchlistRoutes= require('./routes/watchList');
app.use(express.json());
require('dotenv').config();

app.use(cors({
    origin:'http://localhost:4200'
}))
const PORT = process.env.PORT || 3001;
const db=process.env.DB;
mongoose.connect(db).then(()=>{
    console.log('Connected to MongoDB')
   
}
)

//routes
app.use('/users', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/movies', movieRoutes);
app.use('/ratings', ratingRoutes);
app.use('/watchlist', watchlistRoutes);





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

