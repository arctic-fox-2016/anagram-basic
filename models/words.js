'use strict';
module.exports = function(sequelize, DataTypes) {
  var words = sequelize.define('words', {
    kata: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return words;
};
