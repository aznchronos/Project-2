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
  app.get("/auth", function(req,res){
    res.json();
  })
};
