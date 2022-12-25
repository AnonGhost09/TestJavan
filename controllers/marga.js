const marga = require("../libs/marga");

const getAll = async (req, res) => {
  try {
    const result = await marga.getAll();

    return res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "Marga gagal ditampilkan",
    });
  }
};

const controller = {
  getAll,
};

module.exports = controller;
