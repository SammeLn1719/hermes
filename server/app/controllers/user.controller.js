const db = require("../models");
const Product = db.product;

exports.all = (req, res) => {
    Product.findAll({raw:true}).then(products=>{
      res.send(products);
    }).catch(err=>console.log(err));
  };
  
  exports.one = (req, res) => {
    Product.findByPk(req.id).then(products=>{
    if(!products) return; 
    res.send(products);
}).catch(err=>console.log(err));
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  