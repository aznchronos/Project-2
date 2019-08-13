var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Get all examples
  app.get("/api/login", function(req, res) {
    db.login.findAll({}).then(function(dbLogin) {
      res.json(dbLogin);
    });
  });

  app.get("/battle/", function(req, res){
    res.sendFile("/index.html");
  });

  app.get("/overworld/", function(req, res){
    res.sendFile("/index.html");
  });

  // Create a new example
  app.post("/api/login", function(req, res) {
    db.login.create(req.body).then(function(dbLogin) {
      res.json(dbLogin);
    });
  });
};
