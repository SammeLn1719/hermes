const db = require("../models");
const Product = db.product;
const Compound = db.compound;

exports.all = (req,res) => {
    Product.findAll({
        include: [{
            model: Compound
        }],
    }).then(products => {
        res.send(products);
    }).catch(err => console.log(err));
};
exports.brand = (req,res) => {
    Product.findAll({
        attributes: ['brand'],
        group: ['brand']
    }).then(products => {
        res.send(products);
    }).catch(err => console.log(err));
};
exports.type = (req,res) => {
    Product.findAll({
        attributes: ['type'],
        group: ['type']
    }).then(products => {
        res.send(products);
    }).catch(err => console.log(err));
};
exports.id = (req, res) => {
    Product.findAll({
        where: {
            id: req.body.id,
        }, include: [{
            model: Compound
        }],
    }).then(products => {
        res.send(products);
    }).catch(err => console.log(err));
};
