var express = require('express');
var router = express.Router();
var helper = require('../helpers/util');

let fs = require("fs")

/* GET home page. */

router.get('/', function(req, res, next) {
  fs.readFile('./db/fixtures/words', (err, data) => {

    let obj = []

    for (let i = 0; i < data.length; i++) {
      obj.push({
        word: data[i]
      })
    }

    res.render('index', {title: obj});
  });
});

router.get('/:word', function(req, res, next) {
  var word = req.params.word;
  helper.anagrams(word, function(source, data){
    res.render('index', { title: 'Anagrams', word: source, anagrams: data });
  });
});

module.exports = router;
