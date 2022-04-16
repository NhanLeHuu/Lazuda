class Socket {

    static socketio;

    constructor() {

    }

    web(io) {
        // a websocket, log that a user has connected
        io.on("connection", function(socket) {
            io.emit("test", "Hello client from server");

            socket.on("joined", function(message) {

            });

        });
    }

}

module.exports = Socket