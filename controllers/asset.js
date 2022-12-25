const Validator = require("fastest-validator");
const v = new Validator();
const asset = require("../libs/asset");

const getAll = async (req, res) => {
  try {
    const result = await asset.getAll();

    return res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "Asset gagal ditampilkan",
    });
  }
};

const create = async (req, res) => {
  const schema = {
    title: "string|empty:false",
    description: "string|empty:false",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length > 0) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  try {
    const result = await asset.create(req.body);

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
    await asset.deleteOne(req.params.id);

    return res.status(200).json({
      status: "success",
      message: "Data Asset Berhasil Dihapus",
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

const update = async (req, res) => {
  const schema = {
    title: "string|optional",
    description: "string|optional",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length > 0) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const data = {
    id: req.params.id,
    ...req.body,
  };

  try {
    const result = await asset.update(data);

    return res.status(201).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(400).json({
        status: "error",
        message: "Data yang ingin diupdate tidak ada",
      });
    }
    return res.status(400).json({
      status: "error",
      message: "Asset gagal di update",
    });
  }
};

const controller = {
  getAll,
  create,
  deleteOne,
  update,
};

module.exports = controller;
