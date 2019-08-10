module.exports = function(sequelize, DataTypes) {
  var game = sequelize.define("game", {
    charname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    loggedin: {
      type: DataTypes.boolean
    },
    gamestate: {
      type: DataTypes.Integer,
      default: 0
    },

    description: DataTypes.TEXT,
  });
  return game;
}