const statuskeluarga = require("../libs/statusKeluarga");
const Validator = require("fastest-validator");
const v = new Validator();

const getAll = async (req, res) => {
  try {
    const result = await statuskeluarga.getAll();

    return res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "Status Keluarga gagal ditampilkan",
    });
  }
};

const create = async (req, res) => {
  const schema = {
    nama: "string|empty:false",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length > 0) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  try {
    const result = await statuskeluarga.create(req.body.nama);

    return res.status(201).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "Status Keluarga gagal dibuat",
    });
  }
};

const getById = async (req, res) => {
  try {
    const result = await statuskeluarga.getById(req.params.id);

    return res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "Status Keluarga gagal ditampilkan",
    });
  }
};

const controller = {
  getAll,
  create,
  getById,
};

module.exports = controller;
