const { authJwt } = require("../middleware");
const product = require("../controllers/product.controller");
const user = require("../controllers/user.controller");
const sample = require("../controllers/sample.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "authorization, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/product/all", product.all);
  app.get("/api/product/brand", product.brand);
  app.get("/api/product/type", product.type);
  app.get("/api/product/id", product.id);


  app.get("/api/user/basket", user.basket);
  app.get("/api/user/history", user.history);

  
  app.get("/api/types", sample.type);
  app.get("/api/brands", sample.brand);
  /*
  "/api/test/user",
  [authJwt.verifyToken],
  controller.userBoard
);
app.get(
  "/api/test/admin",
  [authJwt.verifyToken, authJwt.isAdmin],
  controller.adminBoard
);*/
};