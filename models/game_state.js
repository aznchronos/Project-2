module.exports = function (sequelize, DataTypes) {
    var game_state = sequelize.define("game_state", {
        inbattle: {
            type: DataTypes.boolean,
            default: 0
        },
        menu: {
            type: DataTypes.boolean,
            default: 0
        }
    });
    return game_state;
}