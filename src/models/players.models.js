const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  playerName: String,
  country: String,
  club: String,
  age: Number,
  sports: String,
});

module.exports = mongoose.model("Players", PlayerSchema);
