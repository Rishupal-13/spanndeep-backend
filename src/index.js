const express = require("express");
var bodyParser = require("body-parser");
const { connectMongoDB } = require("./db/connect");
const cors = require("cors");
const AnalyticsRoute = require("./routes/analytics");
const AuthRoute = require("./routes/auth");
const main = async () => {
  const app = express();
  const port = process.env.PORT || "4000";
  connectMongoDB();
  app.use(cors({}));
  app.use(express.json());

  app.use("/api/analytics", AnalyticsRoute);
  app.use("/api/auth", AuthRoute);
  app.use(express.json({ extended: false }));
  // app.use(bodyParser.json());

  app.listen(port, () => {
    console.log("Server Running at port", port);
  });
};

main();
