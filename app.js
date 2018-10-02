require('dotenv').config();

const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy((username, password, done) => {
        if (username === 'admin' && password === 'secret') {
            return done(null, {username});
        }
        return done(null, null)
    })
);
passport.serializeUser((user, cb) => cb(null, user.username));
passport.deserializeUser((username, cb) => cb(null, { username }));

const app = express();
require('mongoose').connect('mongodb://localhost/live-game-updates-express');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'anything' }));
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});
app.use('/', require('./routes/index'));

module.exports = app;
