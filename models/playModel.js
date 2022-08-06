const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Play = Schema({
  name: String,
  tickets: Number,
  ticketsPrice: Number,
  date: String,
  time: Number,
});

module.exports = mongoose.model("Play", Play);
