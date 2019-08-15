module.exports = function(sequelize, DataTypes) {
  var charStats = sequelize.define("charStats", {
    HP: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1, 2]
      },
      default: 10
    },
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
