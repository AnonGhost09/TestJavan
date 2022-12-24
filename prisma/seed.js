const prisma = require("../utils/db");

async function main() {
  const deleteKelamin = prisma.kelamin.deleteMany();
  const deleteStatusKeluarga = prisma.statusKeluarga.deleteMany();
  const deleteKeluarga = prisma.keluarga.deleteMany();
  const deleteMarga = prisma.marga.deleteMany();
  const deleteAsset = prisma.marga.deleteMany();

  await prisma.$transaction([
    deleteKelamin,
    deleteAsset,
    deleteMarga,
    deleteKeluarga,
    deleteStatusKeluarga,
  ]);

  await prisma.kelamin.createMany({
    data: [
      {
        nama: "Laki-Laki",
      },
      {
        nama: "Perempuan",
      },
    ],
  });

  await prisma.statusKeluarga.createMany({
    data: [
      {
        nama: "Ayah",
      },
      {
        nama: "Ibu",
      },
      {
        nama: "Anak",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
