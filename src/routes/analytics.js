const express = require("express");
const router = express.Router();
const AnalyticsController = require("../controllers/analytics");

router.get("/", AnalyticsController.Fetch);

module.exports = router;
