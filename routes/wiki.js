const express = require('express');
const router = express.Router();
const {
  addPage,
  editPage,
  main,
  userList,
  userPages,
  wikiPage,
} = require('../views');

router.get('/', (req, res) => {
  res.send('got to GET /wiki/');
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.json();
});

router.get('/add', (req, res) => {
  res.send(addPage(''));
});

module.exports = router;
