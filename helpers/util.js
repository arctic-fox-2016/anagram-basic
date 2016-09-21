'use strict';

var models = require('../models');
var sequelize = require('sequelize')
var util = {};

util.anagrams = function(source, callback){
  // sequelize.query(`SELECT words FROM (SELECT words, char_length(words) as l FROM 'words') a where a.l <= ${source.length}`, { type: sequelize.QueryTypes.SELECT})
console.log(source,"source atas")
models.words.findAll({
attributes: ['words'],
where: sequelize.where(sequelize.fn('char_length', sequelize.col('words')), {$lte:source.length})
}).then(function (result) {
  let words = []
  result.forEach((val)=>{
//console.log(val.dataValues.words,"before")
    let sourceword = source.split("")
    let databaseword = val.dataValues.words.split("")
    let match = true
    let length = databaseword.length
    for (var i = 0; i < length; i++) {
      if(sourceword.indexOf(databaseword[0]) >= 0){
        sourceword.splice(sourceword.indexOf(databaseword[0]),1)
        databaseword.splice(0,1)
      } else {
        match = false
        break
      }
    }
    if(match){
    words.push(val.dataValues.words)
  }
  })
  callback(source, words)
})
}

module.exports = util;
