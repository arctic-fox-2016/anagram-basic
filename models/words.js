'use strict';
module.exports = function(sequelize, DataTypes) {
  var words = sequelize.define('words', {
    word: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return words;
};