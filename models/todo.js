'use strict';
module.exports = (sequelize, DataTypes) => {
  var Todo = sequelize.define('Todo', {
    body: DataTypes.STRING,
    complete: DataTypes.INTEGER,
    created: DataTypes.DATE
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};