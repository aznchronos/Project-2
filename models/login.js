module.exports = function(sequelize, DataTypes) {
  var login = sequelize.define("login", {
    username: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100]
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100]
      }
    }
  });
  return login;
};
