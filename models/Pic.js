const mongoose = require("mongoose");

const { Schema } = mongoose;

const picSchema = new Schema({
  picName: String,
  played: { type: Number, default: 0 }
});

mongoose.model("pics", picSchema);
