const Validator = require("fastest-validator");
const v = new Validator();
const keluarga = require("../libs/keluarga");

const getAll = async (req, res) => {
  try {
    const result = await keluarga.getAll();

    return res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "Keluarga gagal ditampilkan",
    });
  }
};

const create = async (req, res) => {
  const schema = {
    nama: "string|empty:false",
    idKelamin: "string|empty:false",
    idStatusKeluarga: "string|empty:false",
    idMarga: "string",
    namaMarga: "string|empty:false",
  };

  const validate = v.validate(req.body, schema);

  if (validate.length > 0) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  try {
    const result = await keluarga.create(req.body);

    return res.status(201).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      status: "error",
      message: "Keluarga gagal dibuat",
    });
  }
};

const update = async (req, res) => {
  const schema = {
    nama: "string|optional",
    idKelamin: "string|optional",
    idStatusKeluarga: "string|optional",
    idMarga: "string|optional",
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
    const result = await keluarga.update(data);

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
      message: "Keluarga gagal di update",
    });
  }
};

const deleteOne = async (req, res) => {
  try {
    await keluarga.deleteOne(req.params.id);

    return res.status(200).json({
      status: "success",
      message: "Data Course Berhasil Dihapus",
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
  getAll,
  create,
  deleteOne,
  update,
};

module.exports = controller;
