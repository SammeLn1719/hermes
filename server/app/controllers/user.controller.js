const db = require("../models");
const Compound = db.compound;
const Basket = db.basket;
const Product = db.product;

exports.basket = (req, res) => {
  Basket.findAll({
      where: {
        userId: req.body.userId,
      },
      include: [{ model: Product,
        include: [{model: Compound}]
      }],
  }).then(basket => {
      res.send(basket);
  }).catch(err => console.log(err));
};
exports.history = (req, res) => {
  Product.findAll({
    attributes: ['brand'],
    group: ['brand']
  }).then(products => {
    res.send(products);
  }).catch(err => console.log(err));
};
