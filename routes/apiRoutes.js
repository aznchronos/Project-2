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
          console.log(data.dataValues);
          if (data !== null) {
            console.log("logged in succesfully");
            //this res.json sends back the user object back to the client side ajax call
            res.json(data.dataValues);
          } else {
            console.log("invalid login credentials");
          }
        });
    }
  });
  app.post("/newUser", function(req) {
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
};
