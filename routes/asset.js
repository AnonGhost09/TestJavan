const express = require("express");
const controllers = require("../controllers");
const asset = express.Router();

asset.get("/", controllers.asset.getAll);
asset.post("/", controllers.asset.create);
asset.put("/:id", controllers.asset.update);
asset.delete("/:id", controllers.asset.deleteOne);

module.exports = asset;
