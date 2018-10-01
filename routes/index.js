const express = require('express');
const router = express.Router();
const passport = require('passport');

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
        res.render('index', {games: {}});
    });

// view a game
router.get('/games/:id',
    (req, res, next) => {
        res.render('index', {game: {}});
    });

// start a game
router.post('/games',
    (req, res, next) => {
        res.redirect(`/games/${game.id}`);
    });

// post an update for a game
router.post('/games/:id',
    (req, res, next) => {
        res.json();
    });

// update a game's score
router.post('/games/:id/score',
    (req, res, next) => {
        res.json();
    });

module.exports = router;
