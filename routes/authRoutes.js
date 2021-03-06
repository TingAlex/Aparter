const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = app => {
  app.post("/api/login", function(req, res, next) {
    passport.authenticate("local", function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.send(info);
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.send(user);
      });
    })(req, res, next);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    console.log("req user is " + req.user);
    res.send(req.user);
  });

  app.post("/api/signup", async (req, res) => {
    const { username, password } = req.body;
    console.log("received is " + username + " " + password);
    const user = new User({ userName: username, password: password });
    try {
      await user.save();
      res.send({ user: { userName: username, password: password } });
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
