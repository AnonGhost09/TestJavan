const db = require("../../utils/db");

const getAll = async () => {
  return db.statusKeluarga.findMany();
};

const getById = async (id) => {
  return db.statusKeluarga.findUnique({
    where: {
      id,
    },
  });
};

const create = async (statusKeluarga) => {
  return db.statusKeluarga.create({
    data: { nama: statusKeluarga },
  });
};

module.exports = {
  getAll,
  getById,
  create,
};
