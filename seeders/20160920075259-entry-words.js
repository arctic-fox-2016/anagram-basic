'use strict';

var Promise = require('bluebird');
var fs = require('fs');

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

		var wordsArray = fs.readFileSync('db/fixtures/words').toString().split("\n")
		var words = []
		for (var idx = 0; idx < wordsArray.length; idx++) {
			if (wordsArray[idx].trim() != "") {
				words.push({
					name: wordsArray[idx].trim(),
					createdAt: new Date(),
					updatedAt: new Date()
				})
			}
		}
		return Promise.try(function () {
			return queryInterface.bulkInsert({
				tableName: 'words'
			}, words, {})
		}).then(function () {
			console.log("Seed Successful!");
		});
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
