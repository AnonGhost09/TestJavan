const db = require("../../utils/db");

const getAll = async () => {
  return db.keluarga.findMany({
    select: {
      id: true,
      nama: true,
      marga: {
        select: {
          nama: true,
        },
      },
      statusKeluarga: {
        select: {
          nama: true,
        },
      },
      kelamin: {
        select: {
          nama: true,
        },
      },
      assets: {
        select: {
          id: true,
          asset: true,
        },
      },
    },
  });
};

const create = async (result) => {
  return db.keluarga.create({
    data: {
      nama: result.nama,
      kelamin: {
        connect: {
          id: result.idKelamin,
        },
      },
      statusKeluarga: {
        connect: {
          id: result.idStatusKeluarga,
        },
      },
      marga: {
        connectOrCreate: {
          create: {
            nama: result.namaMarga,
          },
          where: {
            id: result.idMarga,
          },
        },
      },
    },
  });
};

const update = async (result) => {
  return db.keluarga.update({
    data: {
      nama: result.nama,
      idKelamin: result.idKelamin,
      idMarga: result.idMarga,
      idStatusKeluarga: result.idStatusKeluarga,
    },
    where: {
      id: result.id,
    },
  });
};

const deleteOne = async (id) => {
  return db.keluarga.delete({
    where: {
      id,
    },
  });
};

module.exports = {
  getAll,
  create,
  update,
  deleteOne,
};
