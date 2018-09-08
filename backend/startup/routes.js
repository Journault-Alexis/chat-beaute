const express = require('express');
const cats = require('../routes/cats');
const error = require('../middlewares/error');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/cats', cats);

  app.use(error);

}

