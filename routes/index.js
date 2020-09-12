const express = require('express');
const path = require('path');
const { Chat } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const chats = await Chat.findAll();
        return res.render('chat', {
            title: "black talk",
            chats,
            user: req.session.nick
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/nick', async (req, res, next) => {
    try {
        req.session.nick = req.body.nick;
        res.redirect('/');
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/chat', async (req, res, next) => {
    try {
        const chat = await Chat.create({
            user: req.session.nick,
            chat: req.body.chat,
        });
        console.log("session nick:", req.session.nick);
        req.app.get('io').emit('chat', chat);
        res.send('ok');
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;