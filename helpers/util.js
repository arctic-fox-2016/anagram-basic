'use strict';

var models = require('../models/index');
var util = {};

util.anagrams = function(source, callback){
  var data = ['test','test2']
  callback(source, data)
}

function removePreStringFromWord(word){
  return word.slice(1,word.length)

}



function testAnagram(word, prestring){
  var postString = removePreStringFromWord(word)
}

module.exports = util;
