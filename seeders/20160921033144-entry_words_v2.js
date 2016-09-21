'use strict';

let fs = require('fs')

module.exports = {
  up: function (queryInterface, Sequelize) {
    let wordArr = fs.readFileSync('./db/fixtures/words').toString().split('\n')
    let obj = []

    for (let i = 0; i < wordArr.length; i++) {
      obj.push({
        word: wordArr[i],
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    return queryInterface.bulkInsert('words', obj);
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
