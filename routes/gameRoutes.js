const mongoose = require("mongoose");
const Pic = mongoose.model("pics");
const User = mongoose.model("users");

module.exports = app => {
  app.get("/api/game_pics", async (req, res) => {
    const pics = await Pic.find();
    // console.log(pics);
    res.send({ picList: pics });
  });

  app.get("/api/win_list", async (req, res) => {
    const users = await User.find()
      .limit(10)
      .sort({ credit: -1 })
      .select({ userName: 1, credit: 1 });
    // console.log(pics);
    res.send({ winList: users });
  });

  app.post("/api/addCredit", async (req, res) => {
    const { credit } = req.body;
    req.user.credit += credit;
    try {
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
