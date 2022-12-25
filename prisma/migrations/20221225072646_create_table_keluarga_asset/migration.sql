/*
  Warnings:

  - You are about to drop the column `idKeluarga` on the `asset` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `asset` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `asset` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "asset" DROP CONSTRAINT "ASSET_KELUARGA_ID";

-- AlterTable
ALTER TABLE "asset" DROP COLUMN "idKeluarga",
DROP COLUMN "price",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "keluarga_asset" (
    "id" TEXT NOT NULL,
    "id_keluarga" TEXT,
    "id_asset" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "keluarga_asset_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "keluarga_asset" ADD CONSTRAINT "keluarga_asset_id_keluarga_fkey" FOREIGN KEY ("id_keluarga") REFERENCES "keluarga"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "keluarga_asset" ADD CONSTRAINT "keluarga_asset_id_asset_fkey" FOREIGN KEY ("id_asset") REFERENCES "asset"("id") ON DELETE CASCADE ON UPDATE CASCADE;
