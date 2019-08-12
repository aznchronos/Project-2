var db = require("../models");
var path = require("path");
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
};
