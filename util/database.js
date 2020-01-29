const Sequelize = require('sequelize');

const sequelize = new Sequelize('shop-database', 'root', 'rootroot', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
