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
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    gamestate: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    description: DataTypes.TEXT
  });
  return game;
};
