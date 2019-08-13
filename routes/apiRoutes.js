var db = require("../models");

module.exports = function(app) {
  // handle users login
  // eslint-disable-next-line no-unused-vars
  app.post("/auth", function(req, res) {
    var user = req.body.name;
    var pass = req.body.pass;

    if (user && pass) {
      db.login
        .findOne({
          where: {
            username: user,
            password: pass
          }
        })
        .then(function(data) {
          console.log(data);
          if (data !== null) {
            console.log("logged in succesfully");
            res.redirect("/loggedin");
          } else {
            console.log("invalid login credentials");
          }
        });
    }
  });
  app.post("/newUser", function(req, res) {
    var newUser = req.body.name;
    var newPass = req.body.pass;

    if (newUser && newPass) {
      db.login
        .create({
          username: newUser,
          password: newPass
        })
        .then(function(data) {
          console.log("data succesfully added to database");
          console.log(data);
        });
    } else {
      console.log("error in adding to db");
    }
  });

  app.get("/game/:id", function(req, res) {
    db.game
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbCharName) {
        var characterInfo = [];
        characterInfo.push(dbCharName);
        // res.json(dbCharName);
        db.charStats
          .findOne({
            where: {
              id: req.params.id
            }
          })
          .then(function(dbStats) {
            characterInfo.push(dbStats);
            res.json(characterInfo);
            // console.log(dbStats);
          });
      });
  });
  // Create a new example
  app.post("/api/login", function(req, res) {
    db.login.create(req.body).then(function(dbLogin) {
      res.json(dbLogin);
    });
  });
};
