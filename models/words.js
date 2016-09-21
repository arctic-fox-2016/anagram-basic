'use strict';
module.exports = function (sequelize, DataTypes) {
	var words = sequelize.define('words', {
		name: DataTypes.TEXT
	}, {
		classMethods: {
			associate: function (models) {
				// associations can be defined here
			}
		}
	});
	return words;
};
