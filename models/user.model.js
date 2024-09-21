const mongoose = require('mongoose');

// Create User Schema
const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true, // Each user must have a unique ID
  },
  username: {
    type: String,
    required: true,
    trim: true, // Removes extra spaces
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  avatar: {
    type: String, // Optional - Not all users may have an avatar
  },
  email: {
    type: String,
    required: true,
    unique: true, // Email must be unique and required
    trim: true,
  },
  password: {
    type: String,
    required: true, // Necessary for user authentication
  },
  confirmPassword: {
    type: String, // This is not required to store; it's for validation during registration
  },
  bio: {
    type: String, // Optional - Not every user will add a bio
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Auto-set the account creation date
  },
  followersCount: {
    type: Number,
    default: 0, // No followers initially
  },
  followingCount: {
    type: Number,
    default: 0, // Not following anyone initially
  },
  location: {
    type: String, // Optional - Location is not mandatory for all users
    trim: true,
  },
});

// Export the User model
module.exports = mongoose.model('User', userSchema);
