/*
  Warnings:

  - You are about to drop the column `businessname` on the `Vendor` table. All the data in the column will be lost.
  - Added the required column `businessName` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `businessPhone` to the `Vendor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vendor" DROP COLUMN "businessname",
ADD COLUMN     "businessName" TEXT NOT NULL,
ADD COLUMN     "businessPhone" TEXT NOT NULL;
