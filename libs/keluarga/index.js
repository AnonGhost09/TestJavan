const db = require("../../utils/db");

const getAll = async () => {
  return db.keluarga.findMany();
};

const create = async (keluarga) => {
  return db.keluarga.create({
    data: { nama: keluarga },
  });
};

module.exports = {
  getAll,
  getById,
  create,
};
