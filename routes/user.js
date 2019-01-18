const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  res.send('got to GET /user/');
});

router.post('/', (req, res) => {
  res.send('got to POST /user/')
});

router.get('/add', (req, res) => {
  res.send('got to GET /user/add')
});

module.exports = router
