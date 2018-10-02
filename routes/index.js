const express = require('express');
const router = express.Router();
const passport = require('passport');
const Game = require('./../models/game');

// see the login form
router.get('/login', (req, res, next) => {
    res.render('login');
});

// log in
router.post('/login',
    passport.authenticate('local', {failureRedirect: '/login'}),
    (req, res, next) => {
        res.redirect('/');
    });

// view all games
router.get('/',
    (req, res, next) => {
        return Game.find({})
            .then((games) => {
                return res.render('index', {games});
            });
    });

// view a game
router.get('/games/:id',
    (req, res, next) => {
        return Game.findOne({_id: req.params.id})
            .then((game) => {
                return res.render('game', {game});
            });
    });

// start a game
router.post('/games',
    (req, res, next) => {
        return Game.create(req.body)
            .then((game) => {
                return res.redirect(`/games/${game.id}`);
            });
    });

// post an update for a game
router.post('/games/:id',
    (req, res, next) => {
        const data = req.body;
        // This adds the new update to start of the `updates` array
        // so they are sorted newest-to-oldest
        const updateQuery = { $push: { updates: { $each: [ data ], $position: 0 } } };
        return Game.findOneAndUpdate({_id: id}, updateQuery)
            .then((game) => {
                return res.json(game);
            });
    });

// update a game's score
router.post('/games/:id/score',
    (req, res, next) => {
        return Game.findOneAndUpdate({_id: id}, req.body)
            .then((game) => {
                return res.json(game);
            });
    });

module.exports = router;
