/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var game_state = sequelize.define("game_state", {
    inbattle: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    menu: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  });
  return game_state;
};
