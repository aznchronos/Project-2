module.exports = function(sequelize, DataTypes) {
  // eslint-disable-next-line camelcase
  var gameState = sequelize.define("game_state", {
    inbattle: {
      type: DataTypes.BOOLEAN,
      default: 0
    },
    menu: {
      type: DataTypes.BOOLEAN,
      default: 0
    }
  });
  return gameState;
};
