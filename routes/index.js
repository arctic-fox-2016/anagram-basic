var express = require('express');
var router = express.Router();
var helper = require('../helpers/util');
let models = require("../models")

/* GET home page. */

router.get('/', function(req, res, next) {
  let source = req.query.word.toLowerCase();
  let len = source.length
  let query = "SELECT word FROM words WHERE "
  let charArr = []
  let wordArr = []

  if (source) {
    for (let k = 0; k < 26; k++) {
      if (source.indexOf(String.fromCharCode(65 + k).toLowerCase()) == -1) {
        query += "LOWER(word) NOT LIKE '%" + String.fromCharCode(65 + k).toLowerCase() + "%' AND "
      }
    }

    for (let j = 0; j < source.length; j++) {
      query += "LENGTH(word) - LENGTH(REPLACE(word, '" + source[j] + "', '')) = " + (source.match(new RegExp(source[j], "g")) || []).length + " AND "
    }

    query += "1=1"

    models.sequelize.query(query).then(function(data) {
      for (let i = 0; i < data[0].length; i++) {
        wordArr.push(data[0][i].word.toLowerCase())
      }
      res.render('index', { title: 'Anagrams', word: source, anagrams: wordArr });
    })
  } else {
    res.render('index', {title: 'Anagrams'});
  }
});

module.exports = router;
