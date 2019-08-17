var controller = require("../controller/controller.js");
var path = require("path");

module.exports = function(app) {
  // Load login page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/login.html"));
  });
  //load create account page
  app.get("/create", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/create.html"));
  });
  app.get("/character/:id", controller, function(req, res) {
    console.log('Character My CHAR', req.character);
    res.sendFile(path.join(__dirname, "../views/character.html"));
  });
  app.get("/map/:id", controller, function(req, res) {
    console.log('Map My CHAR', req.character);
    res.sendFile(path.join(__dirname, "../views/map.html"));
  });
};
