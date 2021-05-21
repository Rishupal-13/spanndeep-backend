const express = require("express");
const router = express.Router();
const AnalyticsController = require("../controllers/analytics");

router.get("/", AnalyticsController.Fetch);
router.post("/", AnalyticsController.RecordData);
module.exports = router;
