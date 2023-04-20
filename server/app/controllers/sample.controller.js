const db = require("../models");
const Brand = db.brand;
const Type = db.type;

exports.brand = (req,res) => {
    Brand.findAll({
    }).then(brands => {
        res.send(brands);
    }).catch(err => console.log(err));
};
exports.type = (req,res) => {
    Type.findAll({
    }).then(types => {
        res.send(types);
    }).catch(err => console.log(err));
};
