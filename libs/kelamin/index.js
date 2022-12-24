const db = require("../../utils/db");

const getAll = async () => {
  return db.kelamin.findMany();
};

const getById = async (id) => {
  return db.kelamin.findUnique({
    where: {
      id,
    },
  });
};

const create = async (kelamin) => {
  return db.kelamin.create({
    data: { nama: kelamin },
  });
};

module.exports = {
  getAll,
  getById,
  create,
};
