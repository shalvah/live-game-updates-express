let mongoose = require('mongoose');

let Update = mongoose.model('Update', {
    game_id: String,
    minute: Number,
    type: String,
    description: String,
});

module.exports = Update;
