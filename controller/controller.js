var db = require("../models");

function myFunc(req, res, next) {
  // console.log(db.charStats);
  db.charStats
    .findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(data) {
      var character = [];
      character.push(data.id);
      character.push(data.HP);
      character.push(data.Str);
      character.push(data.Dex);
      // res.json(data);
      console.log(character);
      req.character = character;
      next();
    });
};

module.exports = myFunc;
