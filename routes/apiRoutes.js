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
          // console.log(data.dataValues);
          if (data !== null) {
            // console.log("logged in succesfully");
            console.log("logged in succesfully");
            console.log("This is the data.id: " + data.id);
            // console.log("This is the data ID: " + data.id);
            // console.log("This is the db.game " + db.game);
            db.game
              .findOne({
                where: {
                  id: data.id
                }
              })
              .then(function(dbCharName) {
                // console.log("This is the dbCharname.dataValues " + dbCharName.dataValues.charname)
                db.charStats
                  .findOne({
                    where: {
                      id: data.id
                    }
                  })
                  .then(function(dbStats) {
                    var characterInfo = {
                      ID: data.id,
                      characterName: dbCharName.charname,
                      HP: dbStats.HP,
                      Str: dbStats.Str,
                      Dex: dbStats.Dex
                    };
                    //this res.json sends back the user object back to the client side ajax call
                    // res.json(data.dataValues);
                    return res.json(characterInfo);
                    // console.log(characterInfo);
                  });
              });
          } else {
            console.log("invalid login credentials from apiRoutes");
            return res.status(401).json({msg: 'unable to find user'})
          }
        });
    }
  });

  app.post("/newUser", function(req) {
    var newUser = req.body.name;
    var newPass = req.body.pass;
    var newChar = req.body.char;

    if (newUser && newPass && newChar) {
      db.login
        .create({
          username: newUser,
          password: newPass
        })
        .then(function(data) {
          console.log("data succesfully added to database");
          console.log(data);
          db.game
            .create({
              charname: newChar
            })
            .then(function(result) {
              console.log("New character has been added to database");
              console.log(result);
              db.charStats
                .create({
                  HP: 10,
                  Str: 5,
                  Dex: 1
                })
                .then(function(res) {
                  console.log("Added stats for new character");
                  console.log(res);
                });
            });
        });
    } else {
      console.log("error in adding to db");
    }
  });
};
