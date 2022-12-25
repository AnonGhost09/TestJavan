const db = require("../../utils/db");

const getAll = async () => {
  return db.marga.findMany();
};

module.exports = {
  getAll,
};
