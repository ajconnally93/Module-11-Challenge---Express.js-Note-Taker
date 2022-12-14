const path = require('path');

const express = require('express');
const app = express.Router();

// module.exports = function(app) {

  // gets basic HTML fetch request for pre-built pages from Starter code
  app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
// };

module.exports = app;