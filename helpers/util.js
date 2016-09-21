'use strict';

var anagram = require('anagram');
var models = require('../models/index');
var util = {};
var anagram_checker = require('anagram-checker');

util.anagrams = function (source, callback) {
	// models.sequelize.query('SELECT * FROM words WHERE length(name) <= 6').then(function (result) {
	// 	result = result[0]
	// 	if (result) {
	// 		var anagrams = []
	// 		for (let i in result) {
	// 			if (anagram_checker(source, result[i].name))
	// 				anagrams.push(result[i].name)
	// 		}
	// 		callback(source, anagrams);
	// 	}
	// })

	models.words.findAll({
		where: models.sequelize.where(models.sequelize.fn('char_length', models.sequelize.col('name')), {
			$lte: source.length
		})
	}).then(function (result) {
		if (result) {
			var anagrams = []
			for (let i in result) {
				if (anagram_checker(source, result[i].name))
					anagrams.push(result[i].name)
			}
			callback(source, anagrams);
		}
	})
}

module.exports = util;
