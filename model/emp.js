const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("./connection");

class User extends Model {}
User.init(
  {
    id: {
      field: "ID",
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
      // allowNull defaults to true
    }
    // createdBy: Sequelize.INTEGER,
    // createdOn: Sequelize.DATE,
    // modifiedBy: Sequelize.INTEGER,
    // modifiedOn: Sequelize.DATE,
    // userId: Sequelize.INTEGER
  },
  {
    modelName: "User",
    tableName: "User",
    timestamps: false,
    // createdAt: "createdOn",
    // updatedAt: "modifiedOn",
    sequelize: sequelize
  }
);

module.exports = User;
