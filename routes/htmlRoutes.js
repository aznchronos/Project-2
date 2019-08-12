var path = require("path");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.get("/loggedin", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/loggedin.html"));
  });
};
