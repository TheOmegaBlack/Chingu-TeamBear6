
module.exports = (server) => {
    let io = require('socket.io')(server);
    var nsp = io.of('/websockets');
    nsp.on('connection', function (socket) {
        console.log("connected");
        nsp.emit('timestamp', Date.now());
        setInterval(function () {
            nsp.emit('timestamp', Date.now());
        }, 10000);
    });
    return io;
}