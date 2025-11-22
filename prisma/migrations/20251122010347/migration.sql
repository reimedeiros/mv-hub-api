/*
  Warnings:

  - A unique constraint covering the columns `[cnes]` on the table `Establishment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Establishment_cnes_key` ON `Establishment`(`cnes`);
