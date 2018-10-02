let mongoose = require('mongoose');

let Game = mongoose.model('Game', {
    first_team: String,
    second_team: String,
    first_team_score: Number,
    second_team_score: Number,
    updates: [{
        minute: Number,
        type: String,
        description: String,
    }],
});

module.exports = Game;
