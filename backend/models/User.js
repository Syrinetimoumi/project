const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin:{type: Boolean, required: true},
  watchlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Watchlist' }]
});


module.exports = mongoose.model('User', UserSchema);
