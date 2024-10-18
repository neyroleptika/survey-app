const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    hobbies: [String],
    country: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Survey', SurveySchema);