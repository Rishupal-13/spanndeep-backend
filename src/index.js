const express = require("express");
var bodyParser = require("body-parser");

const cors = require("cors");
const AnalyticsRoute = require("./routes/analytics");
const main = async () => {
  const app = express();
  const port = process.env.PORT || "4000";

  app.use(cors({}));
  app.use("/api/analytics", AnalyticsRoute);

  app.use(express.json({ extended: false }));
  app.use(bodyParser.json());

  app.listen(port, () => {
    console.log("Server Running at port", port);
  });
};

main();
