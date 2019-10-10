const writeFile = require('./file-write');
const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');
const path = '/home/adoxo/alchemy/test.txt';
const logger = require('./logger');

socket.on('write', up => {
  logger(up);
  writeFile(path, up);
});