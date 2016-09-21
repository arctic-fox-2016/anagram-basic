'use strict';
var Promise = require ('bluebird');
var fs = require ('fs');

module.exports = {
  up: function (queryInterface, Sequelize) {
    var wordsArray = fs.readFileSync('db/fixtures/words').toString().split("\n");
    var words = [];
    for (var i = 0; i < wordsArray.length; i++) {
      if (wordsArray[i].trim() != "") {
        words.push({word : wordsArray[i].trim(),createdAt:new Date(),updatedAt:new Date()})
      }
    }
    return Promise.try(function(){

      return queryInterface.bulkInsert({tableName:'Words',schema:'public'},words,{});
    }).then(function(){
        console.log("seed Successfull");

    })
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});``
    */
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
