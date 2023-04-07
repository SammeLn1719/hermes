module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
      name: {
        type: Sequelize.STRING
      },
      info: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.DOUBLE
      },
      type: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      }
    });
  
    return Product;
  };