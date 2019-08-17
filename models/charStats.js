module.exports = function(sequelize, DataTypes) {
  var charStats = sequelize.define("charStats", {
    HP: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1, 2]
      },
      defaultValue: 10
    },
    Str: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1, 2]
      },
      defaultValue: 1
    },
    Dex: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1, 2]
      },
      defaultValue: 1
    }
  });
  return charStats;
};
