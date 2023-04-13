const db = require("../models");
const config = require("../config/auth.config");

const user = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { json } = require("sequelize");
function JWT(user){  
    var token = jwt.sign({ id: user.id,username: user.username,password:user.password }, config.secret, {
      expiresIn: 86400 // 24 hours
    });  
    return token;
}


exports.signup = (req, res) => {
  // Save user to Database
  user.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 5)
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => { 
            res.send(JWT(user));
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {      
          res.send(JWT(user));
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  user.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "user Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      
  console.log(user)
      var token = JWT(user)

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.check = (req, res,next) => {
  res.send(JWT(req.user))
};