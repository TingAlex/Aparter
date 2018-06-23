const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const Jimp = require("jimp");
const formidable = require("express-formidable");

require("./models/User");
require("./services/passport");
const bodyParser = require("body-parser");
mongoose.connect(keys.mongoURI);
const app = express();

app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded());

// app.use(formidable());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("public"));

Jimp.read("./public/images/test.png", function(err, image) {
  if (err) throw err;
  const len = 300;
  let tempPic = image.clone().cover(len * 3, len * 3);
  tempPic.write("./public/images/test_square.png");
  for (let i = 0; i < 9; i++) {
    let x = Math.floor(i / 3);
    let y = i % 3;
    tempPic
      .clone()
      .crop(y * len, x * len, len, len)
      .write("./public/images/test/test_" + i + ".png");
  }
});

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
