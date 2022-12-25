const express = require("express");
const controllers = require("../controllers");
const marga = express.Router();

marga.get("/", controllers.marga.getAll);

module.exports = marga;
