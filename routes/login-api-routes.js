var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/login", function(req, res) {
    db.login.findAll({}).then(function(dbLogin) {
      res.json(dbLogin);
    });
  });

  app.get("/api/login/:id", function(req, res) {
    db.login.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbLogin) {
      res.json(dbLogin);
    });
  });

  // Create a new example
  app.post("/api/login", function(req, res) {
    db.login.create(req.body).then(function(dbLogin) {
      res.json(dbLogin);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.login.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbLogin) {
      res.json(dbLogin);
    });
  });
};
