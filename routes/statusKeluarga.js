const express = require("express");
const controllers = require("../controllers");
const statusKeluarga = express.Router();

statusKeluarga.get("/", controllers.statusKeluarga.getAll);
statusKeluarga.get("/:id", controllers.statusKeluarga.getById);
statusKeluarga.post("/", controllers.statusKeluarga.create);

module.exports = statusKeluarga;
