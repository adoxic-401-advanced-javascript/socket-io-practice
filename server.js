const io = require('socket.io')(7890);
const logger = require('./logger');

io.on('connect', socket => {
  socket.on('readFile', data => {
    logger(data);
    socket.broadcast.emit('toUpCase', data);
  });
  socket.on('up', up => {
    logger(up);
    socket.broadcast.emit('write', up);
  });
});