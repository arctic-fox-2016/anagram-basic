var express = require('express');
var router = express.Router();
var helper = require('../helpers/util');

router.get('/', function(req, res, next) {
  var word = req.query.word;
  if(word){
    helper.anagrams(word, function(source, data){
      res.render('index', { title: 'Anagrams', word: source, anagrams: data });
    });
  } else {
    res.render('index', {title: 'Anagrams'})
  }

});

module.exports = router;
