const express = require('express');
const data = require('../src/testData');

const router = express.Router();

router.get('/contests', (req,res) => {
  res.send({ contests: data.contests });
});

module.exports = router;