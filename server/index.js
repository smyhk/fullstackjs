const express = require('express');

const server = express();

server.listen(4000, () => {
  console.info('Express server listening on port 4000');
})