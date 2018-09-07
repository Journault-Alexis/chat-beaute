const { Cat, validate } = require('../models/cat');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/all',
  async function getAllCatsbyDescendingScore(req, res) {
    const cats = await Cat
      .find()
      .sort({ score: -1 })
    res.send(cats);
  })

router.get('/random',
  async function get2RandomCat(req, res) {
    const numberOfCats = await Cat.find().countDocuments()
    const randomNumber = Math.floor(Math.random() * numberOfCats)
    const randomCat = await Cat.find().limit(2).skip(randomNumber)
    res.send(randomCat);
  })

router.post('/',
  async function fillTheDB(req, res) {
    for (var i = 0; i < req.body.length; i++) {
      let cat = new Cat({
        image: req.body[i].image,
        score: req.body[i].score,
      });
      let cats = await cat.save();
    }
  })

router.put('/',
  async function increaseScore(req, res) {
    const cat = await Cat.findById(req.params.id);
    cat.score++
    const catWithScoreIncrement = await cat.save();
    if (!cat) return res.status(404).send('Oups, the cat with the given ID was not found.');

  });


module.exports = router; 