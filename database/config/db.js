const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('postgres://user:anton@gmail.com:5432/sequelize_db')

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}