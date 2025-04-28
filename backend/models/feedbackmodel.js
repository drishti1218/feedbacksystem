// models/feedbackModel.js

const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    feedbackText: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        enum: ['Suggestion', 'Bug Report', 'Feature Request', 'Other'], // Optional categorization
        default: 'Other'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Export model
module.exports = mongoose.model('Feedback', feedbackSchema);
