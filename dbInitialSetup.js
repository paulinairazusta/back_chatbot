const mongoose = require("mongoose");

module.exports = async () => {
  mongoose.connect(process.env.CONNECTION_DB);
  await require("./seeders/playSeeder");
};
