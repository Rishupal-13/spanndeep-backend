const express = require("express");

const cors = require("cors");
const AnalyticsRoute = require("./routes/analytics");
const main = async () => {
  const app = express();
  const port = process.env.PORT || "4000";

  app.use(cors({}));
  app.use("/api/analytics", AnalyticsRoute);

  app.use(express.json({ extended: false }));
  app.listen(port, () => {
    console.log("Server Running at port", port);
  });
};

main();
