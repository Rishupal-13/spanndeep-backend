require("dotenv").config();
const mongoose = require("mongoose");

const connectRedshiftDB = () => {
  var Redshift = require("node-redshift");
  var options = {};
  var client = {
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
  };
  return new Redshift(client, [options]);
};
const connectMongoDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("Connected to Database 🌱"));
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = { connectMongoDB, connectRedshiftDB };
