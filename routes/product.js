const express = require("express");
const controllers = require("../controllers");
const product = express.Router();

product.get("/", controllers.product.getAll);

module.exports = product;
