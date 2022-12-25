const express = require("express");
const router = express.Router();

const kelaminRouter = require("./kelamin");
const statusKeluargaRouter = require("./statusKeluarga");
const keluargaRouter = require("./keluarga");

router.use("/kelamin", kelaminRouter);
router.use("/status-keluarga", statusKeluargaRouter);
router.use("/keluarga", keluargaRouter);

module.exports = router;
