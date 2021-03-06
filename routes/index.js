const express = require('express');
const path = require('path');
const { Chat } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const chats = await Chat.findAll();
        if (!req.session.nick) {
            res.render('join');
        }
        else {
            res.render('chat', {
                title: "black talk",
                chats,
                user: req.session.nick
            });
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/nick', (req, res, next) => {
    try {
        req.session.nick = req.body.nick;
        res.send('ok');
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
        req.app.get('io').emit('chat', chat);
        res.send('ok');
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;