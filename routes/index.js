const express = require("express");
const router = express.Router();

const kelaminRouter = require("./kelamin");
const statusKeluargaRouter = require("./statusKeluarga");
const keluargaRouter = require("./keluarga");
const productRouter = require("./product");
const assetRouter = require("./asset");
const margaRouter = require("./marga");
const assetKeluarga = require("./assetKeluarga");

router.use("/kelamin", kelaminRouter);
router.use("/status-keluarga", statusKeluargaRouter);
router.use("/keluarga", keluargaRouter);
router.use("/product", productRouter);
router.use("/asset", assetRouter);
router.use("/marga", margaRouter);
router.use("/asset-keluarga", assetKeluarga);

module.exports = router;
