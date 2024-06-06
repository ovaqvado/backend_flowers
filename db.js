const sequelize = require("sequelize");

module.exports = new sequelize(
  process.env.DB_NAME, //NAME DB
  process.env.DB_USER, // USER
  process.env.DB_PASSWORD, //PASSWORD
  {
    dialect: "postgres", //DB
    host: process.env.DB_HOST, //HOST
    port: process.env.DB_PORT, //PORT_DB
  }
);
