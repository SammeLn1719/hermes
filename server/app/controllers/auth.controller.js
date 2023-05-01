const db = require("../models");
const express = require('express');
const config = require("../config/auth.config");
const cookieparser = require('cookie-parser');
const user = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { json } = require("sequelize");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());

function JWT(user, time) {
  var token = jwt.sign({ id: user.id, email: user.email }, config.secret, {
    expiresIn: time // 24 hours
  });
  return token;
}

exports.signup = (req, res) => {
  // Save user to Database
  
  console.log('1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1')
  user.create({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 5),
    role: req.body.role,
  }).then(user => {
    
  console.log('2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1')
    refresh_token = JWT(user, 86400),
      res.cookie('jwt', refresh_token, {
        httpOnly: true,
        sameSite: 'None', secure: true,
        maxAge: 24 * 60 * 60 * 1000
      }),
      res.status(200).send({
        accessToken: JWT(user, 86400),
        id: user.id,
        email: user.email,
        isActivated: true
        
      })
      
  console.log('3!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1')
  })
};

exports.signin = (req, res) => {
  user.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
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

    var token = JWT(user, 86400)
    var refresh_token = JWT(user, 86400)
    user.refresh_token = refresh_token;

    res.cookie('jwt', refresh_token, {
      httpOnly: true,
      sameSite: 'None', secure: true,
      maxAge: 24 * 60 * 60 * 1000
    }),
      res.status(200).send({
        accessToken: token
      });
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.refresh = (req, res) => {
  if (req.cookies?.jwt) {

    // Destructuring refreshToken from cookie
    const refreshToken = req.cookies.jwt;

    // Verifying refresh token
    jwt.verify(refreshToken, config.secret,
      (err, decoded) => {
        if (err) {
          // Wrong Refesh Token
          return res.status(406).json({ message: 'Unauthorized' });
        }
        else {
          user.findOne({
            where: {
              email: req.body.email
            }.then(user => {
              {
                if (refreshToken == user.refresh_token) {
                  const token = jwt.sign({
                    email: userCredentials.email,
                    id: userCredentials.id
                  }, config.secret, {
                    expiresIn: '10m'
                  });
                  var refresh_token = JWT(user, 86400)
                  user.refresh_token = refresh_token;
                  res.cookie('jwt', refresh_token, {
                    httpOnly: true,
                    sameSite: 'None', secure: true,
                    maxAge: 24 * 60 * 60 * 1000
                  }),
                    res.status(200).send({
                      accessToken: token
                    });
                } else {
                  user.refresh_token = null;
                  return res.status(406).json({ message: 'Invalid token' });
                }
              }
            })
          })
        }
      })
  } else {
    return res.status(406).json({ message: 'Unauthorized' });
  }
};


exports.check = (req, res, next) => {
  res.send(JWT(req.user))
};