module.exports = function(sequelize, DataTypes) {
  var charStats = sequelize.define("charStats", {
    Str: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1, 2]
      },
      default: 1
    },
    Dex: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1, 2]
      },
      default: 1
    }
  });
  return charStats;
};
