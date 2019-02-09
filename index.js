'use strict';
const http = require('http');
const router = require('./lib/router');


const server = http.createServer((req, res) => {
  router.route(req, res);
}).on('error', (e) => {
  console.error('Server Eroor', e);
}).on('client Error', (e) => {
  console.error('Client Error', e);
});

const port = 8000;
server.listen(port, () => {
  console.info('listening on ' + port);
});