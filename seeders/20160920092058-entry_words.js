'use strict';

const fs = require('fs')
let words = fs.readFileSync('db/fixtures/words').toString().split('\n')
let wordsobj = []
words.forEach((val)=>{
  let wordobj = {
    words : val,
    createdAt : new Date(),
    updatedAt: new Date()
  }
  wordsobj.push(wordobj)
})
module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('words', wordsobj, {});
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
