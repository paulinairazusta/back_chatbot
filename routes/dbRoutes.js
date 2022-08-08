const express = require("express");
const dbRouter = express.Router();

dbRouter.post("/reset", async (req, res) => {
  await require("../seeders/playSeeder")();
  res.send("The database has been reset");
});

module.exports = dbRouter;
