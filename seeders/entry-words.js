'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    let fs = require('fs')
    var string = fs.readFileSync("db/fixtures/words").toString().split("\n")
    let kumpulanObjectKata = []
    for (let i in string){
      kumpulanObjectKata.push({words: string[i], createdAt: new Date(), updatedAt: new Date()})
    }
    return queryInterface.bulkInsert('words', kumpulanObjectKata);

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
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
