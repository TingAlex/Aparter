const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("users");

module.exports = app => {
  app.post(
    "/api/login",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/api/login",
      failureFlash: true
    })
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.post("/api/signup", async (req, res) => {
    const { userName, password } = req.body;
    if (userName.trim() === "" || password.trim() === "") {
      res.send("illegal username or password recieved.");
    }
    const user = new User({ userName, password });
    try {
      await user.save();
      passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/api/login",
        failureFlash: true
      });
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
