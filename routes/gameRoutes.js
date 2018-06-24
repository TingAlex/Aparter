const mongoose = require("mongoose");
const Pic = mongoose.model("pics");
module.exports = app => {
  app.get("/api/game_pics", async (req, res) => {
    const pics = await Pic.find();
    // console.log(pics);
    res.send({ picList: pics });
  });
};
