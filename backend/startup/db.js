
const mongoose = require('mongoose');


module.exports = function() {

  mongoose.connect("mongodb://chatbeaute:chatbeaute1@ds151282.mlab.com:51282/chatbeaute", { useNewUrlParser: false })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));
}

