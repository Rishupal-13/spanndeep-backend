require("dotenv").config();
const connectDB = () => {
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
module.exports = connectDB;
