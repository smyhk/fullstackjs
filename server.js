const express = require('express');
// const data = require('./src/testData');
const apiRouter = require('./api');

const server = express();

// server.get('/api/contests', (req, res) => {
//   res.send({ contests: data.contests });
//   //res.json(data.contests);
// });

const port = 5000;

server.use('/api', apiRouter);

server.listen(port, () => {
  console.info(`Express listening on port ${port}`);
});