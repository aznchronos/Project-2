var db = require("../models");

function myFunc(req, res, next) {
  // console.log(db.charStats);
module.exports = function(app) {
  db.game
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(data) {
      db.game
        .update({
            score: data.score
        })
      // res.json(data);
    //   console.log(character);
    //   req.character = character;
    //   next();
    });
};

module.exports = myFunc;
