const db = require("../../utils/db");

const create = async (result) => {
  return db.keluargaAsset.create({
    select: {
      keluarga: true,
      asset: true,
    },
    data: {
      idAsset: result.idAsset,
      idKeluarga: result.idKeluarga,
    },
  });
};

const deleteOne = async (idKeluargaAsset) => {
  return db.keluargaAsset.delete({
    where: {
      id: idKeluargaAsset,
    },
  });
};

module.exports = {
  create,
  deleteOne,
};
