
'use strict';

const express = require('express');
//const { FoodModel } = require('../models');

const router = express.Router(); // gives us an object to define routing logic



router.get('/food', read); // return all food
router.get('/food/:id', read); // return food matching id

router.post('/food', create); // create new food
router.put('/food', update); // update food
router.delete('/food', remove); // delete food

async function read(req, res, next) {
  res.status(200).send('working on it');
}

async function create(req, res, next) {
  res.send('working on it');
}

async function update(req, res, next) {
  res.send('working on it');
}

async function remove(req, res, next) {
  res.send('working on it');
}

module.exports = router;