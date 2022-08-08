const express = require("express");
const playRouter = express.Router();
const playController = require("../controllers/playController");

playRouter.get("/plays", playController.getPlays);
playRouter.get("/play/:id", playController.getPlayById);

module.exports = playRouter;
