const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');
const Survey = require('../models/Survey');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/survey', isLoggedIn, (req, res) => {
    res.render('survey');
});

router.post('/survey', isLoggedIn, async (req, res) => {
    const survey = new Survey({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        hobbies: req.body.hobbies,
        country: req.body.country,
        user: req.user._id
    });
    await survey.save();
    req.user.surveys.push(survey);
    await req.user.save();
    res.redirect('/results');
});

router.get('/results', isLoggedIn, async (req, res) => {
    const surveys = await Survey.find({ user: req.user._id });
    res.render('results', { surveys });
});

router.get('/admin', isLoggedIn, (req, res) => {
    res.render('admin');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/survey',
    failureRedirect: '/login'
}));

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/login');
}

module.exports = router;