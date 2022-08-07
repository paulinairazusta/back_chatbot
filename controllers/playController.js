const Play = require("../models/playModel");

const playController = {
  getPlays: async (req, res) => {
    const plays = await Play.find();
    res.send(plays);
  },
  getPlayById: async (req, res) => {
    const play = await Play.findById(req.params.id);
    res.send(play);
  },
};

module.exports = playController;
