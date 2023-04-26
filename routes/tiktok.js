const express = require("express");
const router = express.Router();
const tiktokController = require("../controllers/tiktok");

router.get("/user-and-feeds/:username", tiktokController.getUserAndFeeds);

module.exports = router;
