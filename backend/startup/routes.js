const express = require('express');
const cats = require('../routes/cats');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/cats', cats);

}

