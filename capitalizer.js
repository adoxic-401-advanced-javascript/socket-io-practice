const toUpCase = require('./file-cap');
const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const logger = require('./logger');

socket.on('toUpCase', data => {
  logger(data);
  const up = toUpCase(data);
  logger(up);
  socket.emit('up', up);
});