const {Cat, validate} = require('../models/cat'); 

const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();



router.get('/all', 
    async function getAllCatsbyDescendingScore (req, res) {
      const cats = await Cat.find().sort({score: -1});
      res.send(cats);
})


router.post('/', 
    async function fillTheDB (req, res) {
      for (var i = 0; i<req.body.length ; i++) {
        let cat = new Cat({ 
        image: req.body[i].image,
        score: req.body[i].score,
    });
    let cats = await cat.save();
  }
 
});
module.exports = router; 