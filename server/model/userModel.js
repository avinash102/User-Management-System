const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  gender: String,
  status: String,
});

const UserDb = mongoose.model('userDb', userSchema);

module.exports = UserDb;
