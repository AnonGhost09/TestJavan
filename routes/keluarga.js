const express = require("express");
const controllers = require("../controllers");
const keluarga = express.Router();

keluarga.get("/", controllers.keluarga.getAll);
keluarga.post("/", controllers.keluarga.create);
keluarga.delete("/:id", controllers.keluarga.deleteOne);
keluarga.put("/:id", controllers.keluarga.update);
keluarga.get("/total-price", controllers.keluarga.getTotalPrice);

module.exports = keluarga;
