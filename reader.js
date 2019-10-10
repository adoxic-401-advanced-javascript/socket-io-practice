const readFile = require('./file-reader');
const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const path = '/home/adoxo/alchemy/test.txt';
const logger = require('./logger');

readFile(path)
  .then(text => {
    logger(text);
    socket.emit('readFile', text);
  });

