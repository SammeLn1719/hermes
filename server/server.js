const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
const db = require("./app/models");
const Role = db.role;

const Product = db.product; //для проверки
const Compound = db.compound; //для проверки

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});
function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
    Role.create({
      id: 2,
      name: "admin"
    });
    Product.create({
      id:1,
      name:"Печенье ProteinRex с высоким содержанием протеина «Кокосовое»",       
      info: "Протеиновое печенье",
      cost: 4.10,
      type: "снеки",
      quantity: 1,
      brand: "Rex",
      amount_in_package: 1,
      number_of_servings: 1
    });
    Product.create({
      id:2,
      name:"Печенье ProteinRex с высоким содержанием протеина «Миндаль-лимон»",       
      info: "Протеиновое печенье",
      cost: 4.10,
      type: "снеки",
      quantity: 1,
      brand: "Rex",
      amount_in_package: 1,
      number_of_servings: 1
    });
    Product.create({
      id:3,
      name:"Печенье ProteinRex с высоким содержанием протеина «Арахис»",       
      info: "Протеиновое печенье",
      cost: 4.10,
      type: "снеки",
      quantity: 1,
      brand: "Rex",
      amount_in_package: 1,
      number_of_servings: 1
    });
    Product.create({
      id:4,
      name:"Печенье ProteinRex с высоким содержанием протеина «Вишня-шоколад»",       
      info: "Протеиновое печенье",
      cost: 4.10,
      type: "снеки",
      quantity: 1,
      brand: "Rex",
      amount_in_package: 1,
      number_of_servings: 1
    });
    Product.create({
      id:5,
      name:"Напиток безалкогольный слабогазированный STN Л-Карнитин 1000 со вкусом персик ",       
      info: "Напиток богов",
      cost: 2.60,
      type: "Л-Карнитин",
      quantity: 1,
      brand: "STN",
      amount_in_package: 1000,
      number_of_servings: 1000
    });
    Product.create({
      id:6,
      name:"Напиток безалкогольный слабогазированный STN Л-Карнитин 1000 со вкусом зелёное яблоко",       
      info: "Напиток богов",
      cost: 2.60,
      type: "Л-Карнитин",
      quantity: 1,
      brand: "STN",
      amount_in_package: 1000,
      number_of_servings: 1000
    });
    Product.create({
      id:7,
      name:"Напиток безалкогольный слабогазированный STN Л-Карнитин 1000 со вкусом ананас ",       
      info: "Напиток богов",
      cost: 2.60,
      type: "Л-Карнитин",
      quantity: 1,
      brand: "STN",
      amount_in_package: 1000,
      number_of_servings: 1000
    });
    Product.create({
      id:8,
      name:"Напиток безалкогольный слабогазированный STN Л-Карнитин 1000 со вкусом апельсин",       
      info: "Напиток богов",
      cost: 2.60,
      type: "Л-Карнитин",
      quantity: 1,
      brand: "STN",
      amount_in_package: 1000,
      number_of_servings: 1000
    });
    Compound.create({
      id:1,
      name: "белки",
      quantity: 10,
      dimension:"гр",
      productId: 1
    });
    Compound.create({
      id:2,
      name: "углеводы",
      quantity: 10,
      dimension:"гр",
      productId: 1
    });
    Compound.create({
      id:3,
      name: "белки",
      quantity: 10,
      dimension:"гр",
      productId: 2
    });
    Compound.create({
      id:4,
      name: "углеводы",
      quantity: 10,
      dimension:"гр",
      productId: 2
    });
    Compound.create({
      id:5,
      name: "белки",
      quantity: 10,
      dimension:"гр",
      productId: 3
    });
    Compound.create({
      id:6,
      name: "углеводы",
      quantity: 10,
      dimension:"гр",
      productId: 3
    });
    Compound.create({
      id:7,
      name: "белки",
      quantity: 10,
      dimension:"гр",
      productId: 4
    });
    Compound.create({
      id:8,
      name: "углеводы",
      quantity: 10,
      dimension:"гр",
      productId: 4
    });
    Compound.create({
      id:9,
      name: "Л-карнитин",
      quantity: 1000,
      dimension:"мл",
      productId: 5
    });
    Compound.create({
      id:10,
      name: "Л-карнитин",
      quantity: 1000,
      dimension:"мл",
      productId: 6
    });
    Compound.create({
      id:11,
      name: "Л-карнитин",
      quantity: 1000,
      dimension:"мл",
      productId: 7
    });
    Compound.create({
      id:12,
      name: "Л-карнитин",
      quantity: 1000,
      dimension:"мл",
      productId: 8
    });
}
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});