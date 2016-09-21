'use strict';

let fs = require("fs")
let Promise = require("bluebird")

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
    return Promise.try(function() {
      fs.readFile('./db/fixtures/words', (err, data) => {
        if (err) throw err;

        let obj = []

        for (let i = 0; i < data.length; i++) {
          obj.push({
            word: data[i],
            createdAt: new Date(),
            updatedAt: new Date()
          })
        }
      }).then(function() {
        return queryInterface.bulkInsert({
          tableName: 'words',
          schema: 'public'
        }, obj, {});
      })
    })
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
