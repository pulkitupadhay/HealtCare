const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ['Admin', 'User', 'Manager'],
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the model
const User = mongoose.model('User', UserSchema);

module.exports = User;
