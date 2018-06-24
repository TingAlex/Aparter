const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const Jimp = require("jimp");

require("./models/User");
require("./models/Pic");
require("./services/passport");
const bodyParser = require("body-parser");
mongoose.connect(keys.mongoURI);
const app = express();
app.use(express.static("public"));
const fs = require("fs");
const path = require("path");
const Pic = mongoose.model("pics");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

function processPics(path) {
  let fileName = path.substr(0, path.lastIndexOf("."));
  // console.log("fileName is " + fileName);
  Jimp.read("./public/images/origin/" + path, function(err, image) {
    if (err) throw err;
    const len = 300;
    let tempPic = image.clone().cover(len * 3, len * 3);
    for (let i = 0; i < 9; i++) {
      let x = Math.floor(i / 3);
      let y = i % 3;
      tempPic
        .clone()
        .crop(y * len, x * len, len, len)
        .write("./public/images/pieces/" + fileName + "/" + i + ".png");
    }
  });
}
function readDir(path) {
  let pa = fs.readdirSync(path);
  pa.forEach(async function(ele, index) {
    let info = fs.statSync(path + "/" + ele);
    if (info.isFile()) {
      const picName = ele.substr(0, ele.lastIndexOf("."));
      const pic = new Pic({ picName });
      console.log("file: " + picName);
      try {
        await pic.save();
      } catch (err) {
        res.status(422).send(err);
      }
      // processPics(ele);
    }
  });
}
//***Only used when processing original pictures!!*******
// readDir(path.join(__dirname, "public/images/origin/"));

require("./routes/authRoutes")(app);
require("./routes/gameRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
