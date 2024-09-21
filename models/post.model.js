const mongoose = require('mongoose');

// Create Post Schema
const postSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  avatarUrl: {
    type: String, // Optional - A post may not always have an avatar
  },
  images: {
    type: [String], // Optional - A post may not always include images
  },
  topic: {
    type: String,
    required: true,
    trim: true,
  },
  hashtags: {
    type: String, // Optional - Not all posts will have hashtags
    trim: true,
  },
  likesCount: {
    type: Number,
    default: 0, // No likes initially
  },
  comments: {
    type: [String],
    default: [], // Starts with no comments
  },
  isLiked: {
    type: Boolean,
    default: false, // Defaults to not liked
  },
  isSaved: {
    type: Boolean,
    default: false, // Defaults to not saved
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

// Middleware to update `updatedAt` before saving
postSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Export the Post model
module.exports = mongoose.model('Post', postSchema);
