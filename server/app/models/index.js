const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.product = require("../models/product.model.js")(sequelize, Sequelize);
db.compound = require("../models/compound.model.js")(sequelize, Sequelize);
db.basket = require("../models/basket.model.js")(sequelize, Sequelize);

db.product.hasMany(db.compound, {
  foreignKey: 'productId'
});db.compound.belongsTo(db.product);

db.product.hasMany(db.basket, {
  foreignKey: 'productId'
});db.basket.belongsTo(db.product);

db.user.hasMany(db.basket, {
  foreignKey: 'userId'
});db.basket.belongsTo(db.user);



module.exports = db;