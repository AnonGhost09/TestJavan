const db = require("../../utils/db");

const getAll = async () => {
  return db.asset.findMany({
    select: {
      id: true,
      title: true,
      description: true,
    },
  });
};

const create = async (result) => {
  return db.asset.create({
    data: {
      title: result.title,
      description: result.description,
    },
  });
};

const deleteOne = async (id) => {
  return db.asset.delete({
    where: {
      id,
    },
  });
};

const update = async (result) => {
  return db.asset.update({
    data: {
      title: result.title,
      description: result.description,
    },
    where: {
      id: result.id,
    },
  });
};

module.exports = {
  getAll,
  create,
  deleteOne,
  update,
};
