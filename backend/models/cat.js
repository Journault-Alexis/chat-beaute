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
    required: true,
        min: 0
  },
  id: {
    type: String,
    required: true,
    minlength: 0,
    maxlength: 50
  }
}));

function validateCat(cat) {
  const schema = {
    image: Joi.string().min(5).max(100).required(),
    score: Joi.number().min(0).required(),
    id: Joi.string().min(O).max(100)
  };

  return Joi.validate(cat, schema);
}

exports.Cat = Cat; 
exports.validate = validateCat;