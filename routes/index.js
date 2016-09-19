var express = require('express');
var router = express.Router();
var helper = require('../helpers/util');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', {title: 'Anagrams'});
});

router.get('/:word', function(req, res, next) {
  var word = req.params.word;
  helper.anagrams(word, function(source, data){
    res.render('index', { title: 'Anagrams', word: source, anagrams: data });
  });
});

module.exports = router;
