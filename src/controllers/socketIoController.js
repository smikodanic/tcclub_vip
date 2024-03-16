// Import the necessary modules
const connection = require('../config/connectDB');
const dotenv = require('dotenv');
const { Server } = require('socket.io');

// Load environment variables
dotenv.config();

// Define the function to send messages to admin
const sendMessageAdmin = (io) => {
    io.on('connection', (socket) => {
        // Handle 'data-server' event
        socket.on('data-server', (msg) => {
            io.emit('data-server', msg);
        });
        // Handle 'data-server_2' event
        socket.on('data-server_2', (msg) => {
            io.emit('data-server_2', msg);
        });
        // Handle 'data-server-5' event
        socket.on('data-server-5', (msg) => {
            io.emit('data-server-5', msg);
        });
        // Handle 'data-server-3' event
        socket.on('data-server-3', (msg) => {
            io.emit('data-server-3', msg);
        });
    });
};

// Export the function
module.exports = {
    sendMessageAdmin,
};
