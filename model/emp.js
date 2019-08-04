const Sequelize = require("sequelize");
const Model = Sequelize.Model;

module.exports = (sequelize, Sequelize) => {
  class User extends Model {}
  User.init(
    {
      id: {
        field: "ID",
        type: DataTypes.INTEGER,
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
      },
      createdBy: Sequelize.INTEGER,
      createdOn: Sequelize.DATE,
      modifiedBy: Sequelize.INTEGER,
      modifiedOn: Sequelize.DATE,
      userId: Sequelize.INTEGER
    },
    {
      modelName: "User",
      tableName: "User",
      timestamps: true,
      createdAt: "createdOn",
      updatedAt: "modifiedOn",
      sequelize: sequelize
    }
  );
  User.associate = function(models) {
    User.belongsTo(models.User, { foreignKey: "userId", as: "User" });
  };
  return User;
};
