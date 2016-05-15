var express = require('express');
var router = express.Router();
var path = require('path');
var add = require('./add');
var subtract = require('./subtract');
var multiply = require('./multiply');
var divide = require('./divide');

//routes
router.use('/add', add);
router.use('/subtract', subtract);
router.use('/multiply', multiply);
router.use('/divide', divide);

module.exports = router;
