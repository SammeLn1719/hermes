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
      },
      manufacturer: {
        type: Sequelize.STRING
      },
      amount_in_package:{
        type: Sequelize.INTEGER
      },
      number_of_servings:{
        type: Sequelize.INTEGER
      },
    });
  
    return Product;
  };