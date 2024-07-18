// Define your SQL models, e.g., for Sequelize
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  process.env.PG_DATABASE,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    dialect: "postgres",
  }
);

const ExampleModel = sequelize.define("ExampleModel", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // other fields
});

module.exports = ExampleModel;
