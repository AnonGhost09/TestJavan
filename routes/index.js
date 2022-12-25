const express = require("express");
const router = express.Router();

const kelaminRouter = require("./kelamin");
const statusKeluargaRouter = require("./statusKeluarga");

router.use("/kelamin", kelaminRouter);
router.use("/status-keluarga", statusKeluargaRouter);

module.exports = router;
