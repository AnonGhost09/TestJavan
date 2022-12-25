const express = require("express");
const controllers = require("../controllers");
const assetKeluarga = express.Router();

assetKeluarga.post("/", controllers.assetKeluarga.create);
assetKeluarga.delete("/:id", controllers.assetKeluarga.deleteOne);

module.exports = assetKeluarga;
