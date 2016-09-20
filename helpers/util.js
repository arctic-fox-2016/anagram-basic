'use strict';
let fs = require("fs")
var models = require('../models/index');
var util = {};
var AnagramChecker = require('anagram-checker');
var content=fs.readFileSync("db/fixtures/words.js").toString().split('\n');

var result=[]

util.anagrams = function(source, callback){
  result=[]
  for(let i in content){
    if(AnagramChecker(source,content[i]))
      result.push(content[i])
  }

 
  callback(source, result);
}

module.exports = util;
