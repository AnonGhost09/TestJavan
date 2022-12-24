const express = require("express");
const controllers = require("../controllers");
const kelamin = express.Router();

kelamin.get("/", controllers.kelamin.getAll);
kelamin.get("/:id", controllers.kelamin.getById);
kelamin.post("/", controllers.kelamin.create);

module.exports = kelamin;
