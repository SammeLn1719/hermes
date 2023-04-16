const db = require("../models");
const { Op } = require('sequelize')
const Product = db.product;
const Compound = db.compound;

exports.all = (req, res) => {
  Product.findAll({
    include: [{
      model: Compound
    }],}).then(products => {
      res.send(products);
    }).catch(err => console.log(err));
  };
  exports.brand = (req, res) => {
    Product.findAll({
      attributes: ['brand'],
      group: ['brand']
    }).then(products => {
      res.send(products);
    }).catch(err => console.log(err));
  };
  exports.type = (req, res) => {
    Product.findAll({
      attributes: ['type'],
      group: ['type']
    }).then(products => {
      res.send(products);
    }).catch(err => console.log(err));
  };
exports.name = (req, res) => {
  Product.findAll({
    where: {
      name: req.body.name,
    },include: [{
      model: Compound
    }],
  }).then(products => {
    res.send(products);
  }).catch(err => console.log(err));
};
