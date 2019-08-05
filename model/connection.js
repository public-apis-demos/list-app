const Sequelize = require("sequelize");

const sequelize = new Sequelize("emp", "sa", "Password@123", {
  host: "localhost",
  dialect: "mssql"
});

module.exports = sequelize;
