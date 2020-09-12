const SocketIO = require('socket.io');
const axios = require('axios');

module.exports = (server, app, sessionMiddleware) => {
    const io = SocketIO(server, { path: '/socket.io' });
    app.set('io', io);

    io.use((socket, next) => {
        sessionMiddleware(socket.request, socket.request.res, next);
    });

    io.on('connection', (socket) => {
        console.log('black_chat 접속');
        const req = socket.request;
        io.emit('join', {
            user: 'system',
            chat: `${req.session.nick}님이 입장하셨습니다.`,
        });
        socket.on('disconnect', () => {
            console.log('black_chat 접속 해제');
            io.emit('exit', {
                user: 'system',
                chat: `${req.session.nick}님이 퇴장하셨습니다.`,
            });
        });
    });
}