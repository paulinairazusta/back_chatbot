const Play = require("../models/playModel");

const playController = {
  getPlays: async (req, res) => {
    const plays = await Play.find();
    res.send(plays);
  },
};

module.exports = playController;
