var express = require('express');
var router = express.Router();
var path = require('path');
var result = {};

router.post('/', function(req, res)  {
  var number1 = '';
  var number2 = '';
  for (var i = 0; i < req.body.firstNumber.length; i++) {
    number1 = number1 + req.body.firstNumber[i];
  };
  for (var i = 0; i < req.body.secondNumber.length; i++) {
    number2 = number2 + req.body.secondNumber[i];
  };
  result.number = Number(number1) * Number(number2);
  res.send(result);
});

module.exports = router;
