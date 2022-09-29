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
  res.send('got to GET /users/');
});

module.exports = router;
