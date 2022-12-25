const Validator = require("fastest-validator");
const v = new Validator();
const assetKeluarga = require("../libs/assetKeularga");

const create = async (req, res) => {
  const schema = {
    idAsset: "string|empty:false",
    idKeluarga: "string|empty:false",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length > 0) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  try {
    const result = await assetKeluarga.create(req.body);

    return res.status(201).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: "error",
      message: "Asset gagal dibuat",
    });
  }
};

const deleteOne = async (req, res) => {
  try {
    await assetKeluarga.deleteOne(req.params.id);

    return res.status(200).json({
      status: "success",
      message: "Data Asset Keluarga Berhasil Dihapus",
    });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({
        status: "error",
        message: "Data yang ingin dihapus tidak ada",
      });
    }

    return res.status(400).json({
      status: "error",
      message: "Data Gagal Dihapus",
    });
  }
};

const controller = {
  create,
  deleteOne,
};

module.exports = controller;
