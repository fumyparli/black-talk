const express = require('express');
const path = require('path');
const { Chat } = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const chats = await Chat.findAll();
        console.log("get router 작동완료 이 밑에는 render");
        console.log("현재 session nick:", req.session.nick);
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
        console.log("아니 어이가 존나없네???????");
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/nick', (req, res, next) => {
    try {
        req.session.nick = req.body.nick;
        console.log("/nick router 작동 완료!!!!");
        res.send('ok');
        // 여기서 res.redirect('/'); 하면
        // ajax로 post요청시 url변경이 금지 되어있어 안될수도 있음
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
        console.log("setted session nick:", req.session.nick);
        req.app.get('io').emit('chat', chat);
        res.send('ok');
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;