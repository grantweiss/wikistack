const express     = require('express');
const router      = express.Router()
const { addPage } = require('../views')
const layout      = require('../views/layout');

router.get('/', (req, res) => {
  res.send(layout(''));
});

router.post('/', (req, res) => {
  res.send('got to POST /wiki/')
});

router.get('/add', (req, res) => {
  res.send(addPage())
});

module.exports = router
