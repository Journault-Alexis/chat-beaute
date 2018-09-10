const Joi = require('joi');
const mongoose = require('mongoose');

const Cat = mongoose.model('Cat', new mongoose.Schema({
  image: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100
  },
  score: {
    type: Number,
        min: 0,
  }
}));


function validateCat(cat) {
  const schema = {
    _id: Joi.objectId().required(),
    image: Joi.string().min(5).max(100).required(),
    score: Joi.number().min(0)
  };

  return Joi.validate(cat, schema);
}

exports.Cat = Cat; 
exports.validate = validateCat;

