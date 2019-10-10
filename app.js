const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');

socket.on('hi :)', () => {
  console.log('Hi!');
  socket.emit('huh?');
});