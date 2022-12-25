-- CreateTable
CREATE TABLE "kelamin" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "kelamin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status_keluarga" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "status_keluarga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marga" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "marga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "keluarga" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "id_kelamin" TEXT NOT NULL,
    "id_marga" TEXT NOT NULL,
    "id_status_keluarga" TEXT NOT NULL,

    CONSTRAINT "keluarga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "keluarga_asset" (
    "id" TEXT NOT NULL,
    "id_keluarga" TEXT,
    "id_asset" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "keluarga_asset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "asset" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "asset_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "keluarga" ADD CONSTRAINT "KELUARGA_KELAMIN_ID" FOREIGN KEY ("id_kelamin") REFERENCES "kelamin"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "keluarga" ADD CONSTRAINT "KELUARGA_MARGA_ID" FOREIGN KEY ("id_marga") REFERENCES "marga"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "keluarga" ADD CONSTRAINT "KELUARGA_STATUS_KELUARGA_ID" FOREIGN KEY ("id_status_keluarga") REFERENCES "status_keluarga"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "keluarga_asset" ADD CONSTRAINT "keluarga_asset_id_asset_fkey" FOREIGN KEY ("id_asset") REFERENCES "asset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "keluarga_asset" ADD CONSTRAINT "keluarga_asset_id_keluarga_fkey" FOREIGN KEY ("id_keluarga") REFERENCES "keluarga"("id") ON DELETE CASCADE ON UPDATE CASCADE;
