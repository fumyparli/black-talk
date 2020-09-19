const SocketIO = require('socket.io');
const axios = require('axios');

module.exports = (server, app, sessionMiddleware) => {
    const io = SocketIO(server, { path: '/socket.io' });
    app.set('io', io);

    io.use((socket, next) => {
        sessionMiddleware(socket.request, socket.request.res, next);
    });

    io.on('connection', (socket) => {
        const req = socket.request;
        io.emit('join', {
            user: 'system',
            chat: `${req.session.nick} is in.`,
        });
        socket.on('disconnect', () => {
            io.emit('exit', {
                user: 'system',
                chat: `${req.session.nick} has left.`,
            });
        });
    });
}