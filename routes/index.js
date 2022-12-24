const express = require("express");
const router = express.Router();

const kelaminRouter = require("./kelamin");

router.use("/kelamin", kelaminRouter);

module.exports = router;
