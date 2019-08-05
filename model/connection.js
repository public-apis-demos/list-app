const Sequelize = require("sequelize");
const { database, user, password, host, dialect } = require("../config");

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect
});

module.exports = sequelize;
