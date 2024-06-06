const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
});

const BasketFlowers = sequelize.define("basket_flowers", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
});

const Flower = sequelize.define("flower", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
});

const FlowerInfo = sequelize.define("flower_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketFlowers);
BasketFlowers.belongsTo(Basket);

Type.hasMany(Flower);
Flower.belongsTo(Type);

Flower.hasMany(Rating);
Rating.belongsTo(Flower);

Flower.hasMany(BasketFlowers);
BasketFlowers.belongsTo(Flower);

Flower.hasMany(FlowerInfo);
FlowerInfo.belongsTo(Flower);

module.exports = {
  User,
  Basket,
  BasketFlowers,
  Flower,
  Type,
  Rating,
  FlowerInfo,
};
