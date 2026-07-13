/*
  Warnings:

  - You are about to drop the column `customerId` on the `VendorCustomers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[vendorId,customerPhone]` on the table `VendorCustomers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerPhone` to the `VendorCustomers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "VendorCustomers" DROP CONSTRAINT "VendorCustomers_customerId_fkey";

-- DropIndex
DROP INDEX "VendorCustomers_vendorId_customerId_key";

-- AlterTable
ALTER TABLE "VendorCustomers" DROP COLUMN "customerId",
ADD COLUMN     "customerPhone" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "VendorCustomers_vendorId_customerPhone_key" ON "VendorCustomers"("vendorId", "customerPhone");

-- AddForeignKey
ALTER TABLE "VendorCustomers" ADD CONSTRAINT "VendorCustomers_customerPhone_fkey" FOREIGN KEY ("customerPhone") REFERENCES "User"("phone") ON DELETE CASCADE ON UPDATE CASCADE;
