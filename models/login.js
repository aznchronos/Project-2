module.exports = function (sequelize, DataTypes) {
    var login = sequelize.define("login", {
        username: {
            type: DataTypes.string,
            validate: {
                len: [1, 100]
            }
        },
        password: {
            type: DataTypes.string,
            validate: {
                len: [1, 100]
            }
        }
    });
    return login;
}