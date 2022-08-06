const express = require("express");
const router = express.Router();
const playController = require("./controllers/playController");

router.get("/plays", playController.getPlays);

module.exports = router;
