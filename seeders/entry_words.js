'use strict';
let fs = require("fs")
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
    var content=fs.readFileSync("db/fixtures/words.js").toString().split('\n');
    let arrrayTemp = []
    for(let idx in content){
      arrrayTemp.push({word: content[idx], createdAt: new Date(), updatedAt: new Date()})
    }
    return queryInterface.bulkInsert('Words', arrrayTemp, {});
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
