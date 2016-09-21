'use strict';

var models = require('../models/index');
var util = {};
let fs = require('fs')

util.anagrams = function(source, callback){
  var string = fs.readFileSync("db/fixtures/words").toString().toLowerCase().split("\n")
  let arrayDone = []

  for (let idx in string){
    if(source.split("").sort().join("")==string[idx].split("").sort().join("")){
      arrayDone.push(string[idx])
    }
  }
  callback(source, arrayDone)
}

module.exports = util;
